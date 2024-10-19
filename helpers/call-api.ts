import { httpService } from "~/stores/axios.js";
import { useDateFormat } from "@vueuse/shared";

const axiosInstance = httpService;
const SB_API_KEY =
  import.meta.env.NUXT_SB_API_KEY ||
  "316B25AD31ACEB8D6830E99088B4CDD2C5BBFCCDA193B4038B49B818ACFEFFD5EEF75F23BFC8B6D99403DA737BB8D599DCBED5BD29F1B1966DE753DAFD2A7CA6";
const SB_API_USERNAME = import.meta.env.NUXT_SB_API_USERNAME || "wwd222cwsy2";
const SB_API_PW = import.meta.env.NUXT_SB_API_PW || "Qq123456";
const unewsApi = import.meta.env.VITE_API_URL || "https://content.ufanews.com/";
const sbApi =
  import.meta.env.NUXT_SB_API_URL || "https://cigapicorsd.bigbull99.com/";
const shseoApi =
  import.meta.env.NUXT_SB_API_URL || "https://staging-api.ufabet.sh/";

const methodHeader = () => {
  let headers: any = {
    "Content-Type": "application/json",
  };

  return headers;
};

export const CallApiMethod = Object.freeze({
  get: "get",
  post: "post",
  delete: "delete",
  put: "put",
});

export default {
  async getRunningLiveScore(totalRecord: Number) {
    axiosInstance.defaults.baseURL = unewsApi;

    let leagueIds = [34, 39, 92, 87, 58, 74, 85, 93, 1244]; // top leagues

    const dateFormat = (data: Date, format: string) =>
      useDateFormat(data, format, {}).value.replace('"', "");

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let todayDate = dateFormat(yesterday, "YYYY-MM-DD");
    let dateParam = `filters[matchDate][$gte]=${todayDate}`;
    let leagueIdParam = leagueIds
      .map((id, index) => `filters[leagueId][$in][${index}]=${id}`)
      .join("&");
    let runningStateParam =
      "filters[matchState][$in][0]=1H&filters[matchState][$in][1]=HT&filters[matchState][$in][2]=2H";
    let sortParam = "sort:asc,leagueId:asc,matchDate:asc,matchTime:asc";
    let paginationParam = `pagination[page]=1&pagination[pageSize]=${totalRecord}`;
    let langParam = "locale=en";
    let populateParam = "&populate[homeFlagImg]=*&populate[awayFlagImg]=*";

    // let param = `${dateParam}&${leagueIdParam}&${runningStateParam}&${sortParam}&${paginationParam}&${langParam}&${populateParam}`;
    let param = `${dateParam}&${runningStateParam}&${sortParam}&${paginationParam}&${langParam}&${populateParam}`;

    return httpService({
      method: CallApiMethod.get,
      url: "api/live-scores?" + param,
      timeout: 0,
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async getStanding(leagueId: String) {
    axiosInstance.defaults.baseURL = unewsApi;
    const totalRecord = 100;
    let leagueIdParam = `filters[leagueIdLocale]=${leagueId}en`;
    let sortParam = "sort[0]=leagueName:asc";
    let paginationParam = `pagination[page]=1&pagination[pageSize]=${totalRecord}`;
    let langParam = "locale=en";
    let populateParam =
      "populate[all][populate]=*&populate[home][populate]=*&populate[away][populate]=*";

    let param = `${leagueIdParam}&${sortParam}&${paginationParam}&${langParam}&${populateParam}`;

    return httpService({
      method: CallApiMethod.get,
      url: "api/live-score-standings?" + param,
      timeout: 0,
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async getFixtures(leagueId: String) {
    axiosInstance.defaults.baseURL = unewsApi;
    const dateFormat = (data: Date, format: string) =>
      useDateFormat(data, format, {}).value.replace('"', "");

    const totalRecord = 20;
    let leagueIdParam = `filters[leagueId]=${leagueId}`;
    let runningStateParam =
      "filters[$or][0][matchState][$notIn][0]=FT&filters[$or][1][matchState][$null]=true";
    let today = new Date();
    let todayDate = dateFormat(today, "YYYY-MM-DD");
    let dateFromParam = `filters[matchDate][$gte]=${todayDate}`;
    let sortParam =
      "sort[0]=matchDate:asc,matchState:desc,matchTime:asc,homeName:asc";
    let paginationParam = `pagination[page]=1&pagination[pageSize]=${totalRecord}`;
    let langParam = "locale=en";
    let populateParam = "populate[homeFlagImg]=*&populate[awayFlagImg]=*";
    let param = `${dateFromParam}&${leagueIdParam}&${runningStateParam}&${sortParam}&${paginationParam}&${langParam}&${populateParam}`;

    return httpService({
      method: CallApiMethod.get,
      url: "api/live-scores?" + param,
      timeout: 0,
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async getSportCount(token: String, marketType: String) {
    axiosInstance.defaults.baseURL = sbApi;

    const param = JSON.stringify({
      privateKey: SB_API_KEY,
      token: token,
      marketType: marketType,
    });

    return httpService({
      method: CallApiMethod.post,
      url: "api/getsportcount",
      data: param,
      timeout: 0,
      headers: methodHeader(),
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async getSportOdds(
    token: String,
    gameType1: String,
    gameType2: String,
    marketType: String,
    marketType2: String,
    moduleId: String
  ) {
    axiosInstance.defaults.baseURL = sbApi;

    const param = JSON.stringify({
      privateKey: SB_API_KEY,
      token: token,
      gameType1: gameType1,
      gameType2: gameType2,
      marketType: marketType,
      marketType2: marketType2,
      oddsType: "HK",
      moduleId: moduleId,
    });

    return httpService({
      method: CallApiMethod.post,
      url: "api/getoddslist_index",
      data: param,
      timeout: 0,
      headers: methodHeader(),
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async loginSB() {
    axiosInstance.defaults.baseURL = sbApi;

    const param = JSON.stringify({
      privateKey: SB_API_KEY,
      comptype: "0",
      username: SB_API_USERNAME,
      password: SB_API_PW,
    });

    return httpService({
      method: CallApiMethod.post,
      url: "api/login",
      data: param,
      timeout: 0,
      headers: methodHeader(),
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
  async getLeagueContentById(leagueId: String) {
    const { locale } = useI18n();

    axiosInstance.defaults.baseURL = shseoApi;
    const dateFormat = (data: Date, format: string) =>
      useDateFormat(data, format, {}).value.replace('"', "");

    let leagueIdParam = `filters[leagueId]=${leagueId}`;
    let langParam = `locale=${locale.value}`;
    let populateParam = "populate=deep";
    let param = `${leagueIdParam}&${langParam}&${populateParam}`;

    return httpService({
      method: CallApiMethod.get,
      url: "api/leagues?" + param,
      timeout: 0,
    })
      .then((response) => {
        if (response.data) {
          return {
            succ: true,
            data: response.data.data,
          };
        }
        return {
          succ: false,
          data: null,
          msg: "No record found",
        };
      })
      .catch((error) => {
        let defaultErrorMessage = error.message || "Unknown error";
        if (error.response) {
          return {
            succ: false,
            data: null,
            msg: error.response.data.message,
          };
        } else {
          return {
            succ: false,
            data: null,
            msg: defaultErrorMessage,
          };
        }
      });
  },
};
