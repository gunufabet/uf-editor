import {
  SportCategory,
  LiveMatchCount,
  Odds,
  type LiveScore,
} from "~/types/strapi-model";
import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";
import callApi from "~/helpers/call-api";
import { GameType1, GameType2 } from "~/enums/game-type.js";
import { MarketType } from "~/enums/market-type.js";

export const useSportStore = defineStore("sport", {
  state: () => {
    return {
      sportCategory: [] as Strapi4ResponseData<SportCategory>[],
      runningLiveScore: [] as Strapi4ResponseData<LiveScore>[],
      runningLiveScoreByLeague: [] as Strapi4ResponseData<LiveScore>[],
      leagueList: [],
      sportCount: {} as LiveMatchCount,
      oddsList: [] as Odds[],
      sbApiToken: "",
    };
  },
  actions: {
    async fetchSportCateogry() {
      const { find } = useStrapi();
      const { locale } = useI18n();
      this.sportCategory = (
        await find<SportCategory>("sport-categories", {
          // locale: locale.value as StrapiLocale,
          sort: ["order:asc"],
          pagination: {
            start: 0,
            limit: 20,
          },
          populate: {
            localizations: {
              fields: ["id", "locale", "name"],
            },
          },
        })
      ).data;
    },
    async fetchRunningMatch() {
      const response = await callApi.getRunningLiveScore(3);
      if (response.succ) {
        this.runningLiveScore = response.data;
      }
    },
    async fetchRunningMatchByLeague() {
      const response = await callApi.getRunningLiveScore(15);
      if (response.succ) {
        this.runningLiveScoreByLeague = response.data;

        try {
          let groupedData = {};
          let i = 0;
          response.data.forEach((item) => {
            const { leagueId, leagueName } = item.attributes;

            // Check if this leagueId already exists in the groupedData object
            if (!groupedData[leagueId]) {
              // If not, initialize it with leagueId and leagueName and an empty records array
              groupedData[leagueId] = {
                id: leagueId,
                text: leagueName,
                menuTabOrder: i + 1,
                records: [],
              };

              i++;
            }

            // Push the current record into the records array
            groupedData[leagueId].records.push(item);
          });

          // add to league
          this.leagueList = [];
          for (let league in groupedData) {
            this.leagueList.push(groupedData[league]);
          }
        } catch (error) {}
      }
    },
    async getSBToken() {
      if (!this.sbApiToken) {
        const getTokenResponse = await callApi.loginSB();

        if (getTokenResponse.succ) {
          this.sbApiToken = getTokenResponse.data.result.token;
        }
      }
    },
    async fetchSportCount() {
      await this.getSBToken();

      if (this.sbApiToken) {
        const token = this.sbApiToken;

        const responseRunning = await callApi.getSportCount(
          token,
          MarketType.RUNNING
        );
        const responseToday = await callApi.getSportCount(
          token,
          MarketType.TODAY
        );
        const responseEarly = await callApi.getSportCount(
          token,
          MarketType.EARLY
        );

        this.sportCount = {
          runningSoccerHDP:
            responseRunning.data.resultDS.soccerSportCount[0].hdpCount,
          todaySoccerHDP:
            responseToday.data.resultDS.soccerSportCount[0].hdpCount,
          earlySoccerHDP:
            responseEarly.data.resultDS.soccerSportCount[0].hdpCount,
          runningSoccerOutright:
            responseRunning.data.resultDS.soccerSportCount[0].outCount,
          todaySoccerOutright:
            responseToday.data.resultDS.soccerSportCount[0].outCount,
          earlySoccerOutright:
            responseEarly.data.resultDS.soccerSportCount[0].outCount,
        };
      }
    },
    async fetchSportOdds() {
      await this.getSBToken();

      try {
        if (this.sbApiToken) {
          const token = this.sbApiToken;
          const oddsResponse = await callApi.getSportOdds(
            token,
            GameType1.SOCCER,
            GameType2.SOCCER,
            MarketType.TODAY,
            MarketType.TODAY
          );

          this.oddsList = oddsResponse.data.result;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  getters: {},
});
