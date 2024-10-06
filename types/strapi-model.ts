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

export interface SportCategory {
  name: string;
  imgBase64: string;
  urlPath: string;
  imgAlt: string;
  order: number;
}

export interface LiveScore {
  id: number;
  friendlyUrl: string;
  matchId: string;
  leagueId: string;
  leagueName: string;
  homeName: string;
  awayName: string;
  matchState: string;
  runningMatchMinute: string;
  homeScore: string;
  awayScore: string;
  matchDate: Date;
  kickOffDateTime: string;
  matchIdLocale: string;
  matchTime: string;
  homeFlag: string;
  awayFlag: string;
  htScore: string;
  homeFormation: string;
  awayFormation: string;
  homeFlagImg: Strapi4ResponseSingle<LivescoreTeamFlag>;
  awayFlagImg: Strapi4ResponseSingle<LivescoreTeamFlag>;
}

export interface LivescoreTeamFlag {
	teamId: number;
	flag: string;
}