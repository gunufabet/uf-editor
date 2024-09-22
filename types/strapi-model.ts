import type {
  Strapi4ResponseMany,
  Strapi4ResponseSingle,
} from "@nuxtjs/strapi/dist/runtime/types/v4";

export interface SportCategory {
  name: string;
  imgBase64: string;
  urlPath: string;
  imgAlt: string;
  order: number;
}

export interface SportSubContent {
  title: string;
  content: string;
}


export interface SportSubContentList {
  title: string;
  content: string;
  contentList: SportSubContent[];
}

export interface TabMenu {
  id: string;
  text: string;
}

export interface BetBoost {
  leagueName: string;
  homeName: string;
  awayName: string;
  homeScore: number;
  awayScore: number;
  odds: string;
}
