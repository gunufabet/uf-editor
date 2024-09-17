import { SportCategory } from "~/types/strapi-model";
import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";

export const useSportStore = defineStore("sport", {
  state: () => {
    return {
      sportCategory: [] as Strapi4ResponseData<SportCategory>[],
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
              fields: ['id', 'locale', 'name']
            }
          }
        })
      ).data;
    },
  },
  getters: {},
});
