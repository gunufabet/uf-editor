import {
  SportCategory,
  LiveMatchCount,
  MatchOdds,
  ApiOdds,
  type LiveScore,
} from "~/types/strapi-model";
import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";
import callApi from "~/helpers/call-api";
import { GameType1, GameType2 } from "~/enums/game-type.js";
import { MarketType } from "~/enums/market-type.js";
import { formatAmount } from "@/composables/generalUtil";

export const useSportStore = defineStore("sport", {
  state: () => {
    return {
      sportCategory: [] as Strapi4ResponseData<SportCategory>[],
      runningLiveScore: [] as Strapi4ResponseData<LiveScore>[],
      runningLiveScoreByLeague: [] as Strapi4ResponseData<LiveScore>[],
      leagueList: [],
      sportCount: {} as LiveMatchCount,
      matchOddsList: [] as MatchOdds[],
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
    async fetchSportOdds(
      locale: String,
      marketType: String,
      moduleId: String,
      maxRecords: Number
    ) {
      await this.getSBToken();
      let matchOddsList = [] as MatchOdds[];

      try {
        if (this.sbApiToken) {
          const token = this.sbApiToken;
          const oddsResponse = await callApi.getSportOdds(
            token,
            "", // B (Based on sport type, empty if sport type is Soccer (S) )
            "", // B (Based on sport type, empty if sport type is Soccer (S) )
            // MarketType.EARLY,
            marketType,
            "", // MarketType2 = r / t / e / u (empty if marketType is (r/t/e/u)
            moduleId
          );

          const parsedResponse = JSON.parse(oddsResponse.data.result);
          // this.matchOddsList = [] as MatchOdds[];

          for (let i = 0; i < parsedResponse.length && i < maxRecords; i++) {
            const item = parsedResponse[i];
            const itemPrevious = parsedResponse[i - 1];

            if (i > 0 && item[15] === itemPrevious[15]) {
              maxRecords += 1;
              continue;
            }

            const apiOddsItem: ApiOdds = {
              socOddsId: item[0],
              socOddsId_FH: item[1],
              moduleId: item[2],
              moduleOrder: item[3],
              moduleTitle: item[4],
              moduleTitleC: item[5],
              moduleTitleT: item[6],
              moduleTitleV: item[7],
              moduleTitleJ: item[8],
              moduleTitleK: item[9],
              gameType: item[10],
              gameType2: item[11],
              gameType3: item[12],
              matchCode: item[13],
              matchDate: item[14],
              home: item[15],
              homeC: item[16],
              homeT: item[17],
              homeV: item[18],
              homeJ: item[19],
              homeK: item[20],
              away: item[21],
              awayC: item[22],
              awayT: item[23],
              awayV: item[24],
              awayJ: item[25],
              awayK: item[26],
              isHomeGive: item[27],
              isHomeGive_FH: item[28],
              hdp: item[29],
              hdpOdds: item[30],
              hdpSpread: item[31],
              hdp_FH: item[32],
              hdpOdds_FH: item[33],
              hdpSpread_FH: item[34],
              ou: item[35],
              ouOdds: item[36],
              ouSpread: item[37],
              ou_FH: item[38],
              ouOdds_FH: item[39],
              ouSpread_FH: item[40],
              hasHdp: item[41],
              hasOU: item[42],
              hasHdp_FH: item[43],
              hasOU_FH: item[44],
              isPause: item[45],
              isPause_FH: item[46],
              isLastCall: item[47],
              isHalfTime: item[48],
              isRun: item[49],
              runHomeScore: item[50],
              runAwayScore: item[51],
              isInetBet: item[52],
              isInetBet_FH: item[53],
              isDanger: item[54],
              live: item[55],
              inetMinTransLimit: item[56],
              inetMaxTransLimit: item[57],
              inetMaxOUTransLimit: item[58],
              inetMinTransLimit_FH: item[59],
              inetMaxTransLimit_FH: item[60],
              inetMaxOUTransLimit_FH: item[61],
              hasOddsDiff: item[62],
              hasSpreadDiff: item[63],
              hasOddsDiff_FH: item[64],
              hasSpreadDiff_FH: item[65],
              hasRunning: item[66],
              hasFirstHalf: item[67],
              workingDate: item[68],
              curMinute: item[69],
              status: item[70],
              x121Odds: item[71],
              x12XOdds: item[72],
              x122Odds: item[73],
              hasX12: item[74],
              x121Odds_FH: item[75],
              x12XOdds_FH: item[76],
              x122Odds_FH: item[77],
              hasX12_FH: item[78],
              rCHomE: item[79],
              rCAway: item[80],
              closingDate: item[81],
              favId: item[82],
              homeId: item[83],
              awayId: item[84],
              scoreNew: item[85],
              statsId: item[86],
              channel: item[87],
              isWC: item[88],
              rTSMatchId: item[89],
              lcId: item[90],
              nInfo: item[91],
              nInfoC: item[92],
              nInfoT: item[93],
              nInfoV: item[94],
              nInfoJ: item[95],
              nInfoK: item[96],
              injuryTime: item[97],
              hdpSpreadOri: item[98],
              hdpSpreadOri_FH: item[99],
              ouSpreadOri: item[100],
              ouSpreadOri_FH: item[101],
              todayDate: item[102],
              hasPar: item[103],
              hasPar_FH: item[104],
              minSpread: item[105],
              eventKey: item[106],
              isOdd: item[107],
              hasOE: item[108],
              oeOdds: item[109],
              oeSpread: item[110],
              isEarly: item[111],
              homeHDPOdds_Bet: item[112],
              awayHDPOdds_Bet: item[113],
              overOdds_Bet: item[114],
              underOdds_Bet: item[115],
              homeHDPOdds_FH_Bet: item[116],
              awayHDPOdds_FH_Bet: item[117],
              overOdds_FH_Bet: item[118],
              underOdds_FH_Bet: item[119],
              homeHDPOdds_Bet_Display: item[120],
              awayHDPOdds_Bet_Display: item[121],
              overOdds_Bet_Display: item[122],
              underOdds_Bet_Display: item[123],
              _1Odds_Bet_Display: item[124],
              _XOdds_Bet_Display: item[125],
              _2Odds_Bet_Display: item[126],
              oddOdds_Bet_Display: item[127],
              evenOdds_Bet_Display: item[128],
              homeHDPOdds_FH_Bet_Display: item[129],
              awayHDPOdds_FH_Bet_Display: item[130],
              overOdds_FH_Bet_Display: item[131],
              underOdds_FH_Bet_Display: item[132],
              _1Odds_FH_Bet_Display: item[133],
              _XOdds_FH_Bet_Display: item[134],
              _2Odds_FH_Bet_Display: item[135],
              oddOdds_FH_Bet_Display: item[136],
              evenOdds_FH_Bet_Display: item[137],
              isAvailable_HDP: item[138],
              isAvailable_OU: item[139],
              isAvailable_1X2: item[140],
              isAvailable_HDP_FH: item[141],
              isAvailable_OU_FH: item[142],
              isAvailable_1X2_FH: item[143],
              matchDate2: item[144],
              isMainMarket: item[145],
              isOdd_FH: item[146],
              hasOE_FH: item[147],
              oeOdds_FH: item[148],
              oeSpread_FH: item[149],
              oddOdds_Bet: item[150],
              evenOdds_Bet: item[151],
              oddOdds_FH_Bet: item[152],
              evenOdds_FH_Bet: item[153],
              isAvailableOE: item[154],
              isAvailableOE_FH: item[155],
              stDatabaseId: item[156],
              info: item[157],
            };

            const oddsItem: MatchOdds = {
              score: `${
                marketType === MarketType.RUNNING
                  ? apiOddsItem.runHomeScore + " - " + apiOddsItem.runAwayScore
                  : ""
              }`,
              homeScore: `${apiOddsItem.runHomeScore}`,
              awayScore: `${apiOddsItem.runAwayScore}`,
              time: `${
                marketType === MarketType.RUNNING
                  ? apiOddsItem.status === "0" && apiOddsItem.curMinute === "0"
                    ? ""
                    : `${apiOddsItem.status}H ${apiOddsItem.curMinute}`
                  : apiOddsItem.matchDate
              }`,
              leagueName:
                locale === "th"
                  ? apiOddsItem.moduleTitleT
                  : apiOddsItem.moduleTitle,
              homeName: locale === "th" ? apiOddsItem.homeT : apiOddsItem.home,
              awayName: locale === "th" ? apiOddsItem.awayT : apiOddsItem.away,
              hasLiveStream: apiOddsItem.hasRunning,
              hasStatistic: apiOddsItem.statsId > 0 ? true : false,
              hasMoreBetOption: true,
              homeOdd_FT_HDP_1: apiOddsItem.isHomeGive
                ? `${
                    apiOddsItem.hdp > 0 ? apiOddsItem.hdp * -1 : apiOddsItem.hdp
                  }`
                : `${apiOddsItem.hdp}`,
              homeOdd_FT_HDP_2: `${
                apiOddsItem.homeHDPOdds_Bet_Display > 0
                  ? formatAmount(apiOddsItem.homeHDPOdds_Bet_Display)
                  : "-"
              }`,
              homeOdd_FT_OU_1: `o${apiOddsItem.ou}`,
              homeOdd_FT_OU_2: `${
                apiOddsItem.overOdds_Bet_Display > 0
                  ? formatAmount(apiOddsItem.overOdds_Bet_Display)
                  : "-"
              }`,
              homeOdd_FT_1X2_1: "Home",
              homeOdd_FT_1X2_2: `${
                apiOddsItem._1Odds_Bet_Display > 0
                  ? formatAmount(apiOddsItem._1Odds_Bet_Display)
                  : "-"
              }`,

              awayOdd_FT_HDP_1: apiOddsItem.isHomeGive
                ? `${apiOddsItem.hdp}`
                : `${
                    apiOddsItem.hdp > 0
                      ? apiOddsItem.hdp * -1
                      : apiOddsItem.hdp > 0
                  }`,
              awayOdd_FT_HDP_2: `${
                apiOddsItem.awayHDPOdds_Bet_Display > 0
                  ? formatAmount(apiOddsItem.awayHDPOdds_Bet_Display)
                  : "-"
              }`,
              awayOdd_FT_OU_1: `u${apiOddsItem.ou}`,
              awayOdd_FT_OU_2: `${
                apiOddsItem.underOdds_Bet_Display > 0
                  ? formatAmount(apiOddsItem.underOdds_Bet_Display)
                  : "-"
              }`,
              awayOdd_FT_1X2_1: "Away",
              awayOdd_FT_1X2_2: `${
                apiOddsItem._2Odds_Bet_Display > 0
                  ? formatAmount(apiOddsItem._2Odds_Bet_Display)
                  : "-"
              }`,
              odd_FT_1X2_Draw_1: `Draw`,
              odd_FT_1X2_Draw_2: `${
                apiOddsItem._XOdds_Bet_Display > 0
                  ? formatAmount(apiOddsItem._XOdds_Bet_Display)
                  : "-"
              }`,
            };
            // this.matchOddsList.push(oddsItem);
            matchOddsList.push(oddsItem);
          }
        }
      } catch (error) {
      } finally {
        return matchOddsList;
      }
    },
  },
  getters: {},
});
