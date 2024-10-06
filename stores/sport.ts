import { SportCategory, type LiveScore } from "~/types/strapi-model";
import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";
import callApi from "~/helpers/call-api";

export const useSportStore = defineStore("sport", {
  state: () => {
    return {
      sportCategory: [] as Strapi4ResponseData<SportCategory>[],
      runningLiveScore: [] as Strapi4ResponseData<LiveScore>[],
      runningLiveScoreByLeague: [] as Strapi4ResponseData<LiveScore>[],
      leagueList: [],
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
        } catch (error) {
          
        }
      }
    },
  },
  getters: {},
});
