import { httpService } from "~/stores/axios.js";
import { useDateFormat } from "@vueuse/shared";

export const CallApiMethod = Object.freeze({
  get: "get",
  post: "post",
  delete: "delete",
  put: "put",
});

export default {
  async getRunningLiveScore() {
    let leagueIds = [34, 39, 92, 87, 58, 74, 85, 93, 1244]; // top leagues

    const dateFormat = (data: Date, format: string) =>
      useDateFormat(data, format, {
        // locales: locale.value === "th" ? "th-TH" : "en-US",
      }).value.replace('"', "");

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
    let paginationParam = "pagination[page]=1&pagination[pageSize]=3";
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
};
