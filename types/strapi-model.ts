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

export interface LiveMatchCount {
  runningSoccerHDP: number;
  todaySoccerHDP: number;
  earlySoccerHDP: number;
  runningSoccerOutright: number;
  todaySoccerOutright: number;
  earlySoccerOutright: number;
}
export interface MatchOdds {
  score: string;
  homeScore: string;
  awayScore: string;
  time: string;
  leagueName: string;
  homeName: string;
  awayName: string;
  hasLiveStream: boolean;
  hasStatistic: boolean;
  hasMoreBetOption: boolean;
  homeOdd_FT_HDP_1: string;
  homeOdd_FT_HDP_2: string;
  homeOdd_FT_OU_1: string;
  homeOdd_FT_OU_2: string;
  homeOdd_FT_1X2_1: string;
  homeOdd_FT_1X2_2: string;
  awayOdd_FT_HDP_1: string;
  awayOdd_FT_HDP_2: string;
  awayOdd_FT_OU_1: string;
  awayOdd_FT_OU_2: string;
  awayOdd_FT_1X2_1: string;
  awayOdd_FT_1X2_2: string;
  odd_FT_1X2_Draw_1: string;
  odd_FT_1X2_Draw_2: string;
}


export interface ApiOdds {
  socOddsId: number;
  socOddsId_FH: number;
  moduleId: number;
  moduleOrder: number;
  moduleTitle: string;
  moduleTitleC: string;
  moduleTitleT: string;
  moduleTitleV: string;
  moduleTitleJ: string;
  moduleTitleK: string;
  gameType: string;
  gameType2: string;
  gameType3: string;
  matchCode: string;
  matchDate: string;
  home: string;
  homeC: string;
  homeT: string;
  homeV: string;
  homeJ: string;
  homeK: string;
  away: string;
  awayC: string;
  awayT: string;
  awayV: string;
  awayJ: string;
  awayK: string;
  isHomeGive: boolean;
  isHomeGive_FH: boolean;
  hdp: number;
  hdpOdds: number;
  hdpSpread: number;
  hdp_FH: number;
  hdpOdds_FH: number;
  hdpSpread_FH: number;
  ou: number;
  ouOdds: number;
  ouSpread: number;
  ou_FH: number;
  ouOdds_FH: number;
  ouSpread_FH: number;
  hasHdp: boolean;
  hasOU: boolean;
  hasHdp_FH: boolean;
  hasOU_FH: boolean;
  isPause: boolean;
  isPause_FH: boolean;
  isLastCall: boolean;
  isHalfTime: boolean;
  isRun: boolean;
  runHomeScore: number;
  runAwayScore: number;
  isInetBet: boolean;
  isInetBet_FH: boolean;
  isDanger: boolean;
  live: boolean;
  inetMinTransLimit: number;
  inetMaxTransLimit: number;
  inetMaxOUTransLimit: number;
  inetMinTransLimit_FH: number;
  inetMaxTransLimit_FH: number;
  inetMaxOUTransLimit_FH: number;
  hasOddsDiff: boolean;
  hasSpreadDiff: boolean;
  hasOddsDiff_FH: boolean;
  hasSpreadDiff_FH: boolean;
  hasRunning: boolean;
  hasFirstHalf: boolean;
  workingDate: string;
  curMinute: string;
  status: string;
  x121Odds: number;
  x12XOdds: number;
  x122Odds: number;
  hasX12: boolean;
  x121Odds_FH: number;
  x12XOdds_FH: number;
  x122Odds_FH: number;
  hasX12_FH: boolean;
  rCHomE: string;
  rCAway: string;
  closingDate: string;
  favId: number;
  homeId: number;
  awayId: number;
  scoreNew: string;
  statsId: number;
  channel: string;
  isWC: boolean;
  rTSMatchId: number;
  lcId: number;
  nInfo: string;
  nInfoC: string;
  nInfoT: string;
  nInfoV: string;
  nInfoJ: string;
  nInfoK: string;
  injuryTime: string;
  hdpSpreadOri: number;
  hdpSpreadOri_FH: number;
  ouSpreadOri: number;
  ouSpreadOri_FH: number;
  todayDate: string;
  hasPar: boolean;
  hasPar_FH: boolean;
  minSpread: number;
  eventKey: string;
  isOdd: boolean;
  hasOE: boolean;
  oeOdds: number;
  oeSpread: number;
  isEarly: boolean;
  homeHDPOdds_Bet: number;
  awayHDPOdds_Bet: number;
  overOdds_Bet: number;
  underOdds_Bet: number;
  homeHDPOdds_FH_Bet: number;
  awayHDPOdds_FH_Bet: number;
  overOdds_FH_Bet: number;
  underOdds_FH_Bet: number;
  homeHDPOdds_Bet_Display: number;
  awayHDPOdds_Bet_Display: number;
  overOdds_Bet_Display: number;
  underOdds_Bet_Display: number;
  _1Odds_Bet_Display: number;
  _XOdds_Bet_Display: number;
  _2Odds_Bet_Display: number;
  oddOdds_Bet_Display: number;
  evenOdds_Bet_Display: number;
  homeHDPOdds_FH_Bet_Display: number;
  awayHDPOdds_FH_Bet_Display: number;
  overOdds_FH_Bet_Display: number;
  underOdds_FH_Bet_Display: number;
  _1Odds_FH_Bet_Display: number;
  _XOdds_FH_Bet_Display: number;
  _2Odds_FH_Bet_Display: number;
  oddOdds_FH_Bet_Display: number;
  evenOdds_FH_Bet_Display: number;
  isAvailable_HDP: boolean;
  isAvailable_OU: boolean;
  isAvailable_1X2: boolean;
  isAvailable_HDP_FH: boolean;
  isAvailable_OU_FH: boolean;
  isAvailable_1X2_FH: boolean;
  matchDate2: string;
  isMainMarket: boolean;
  isOdd_FH: boolean;
  hasOE_FH: boolean;
  oeOdds_FH: number;
  oeSpread_FH: number;
  oddOdds_Bet: number;
  evenOdds_Bet: number;
  oddOdds_FH_Bet: number;
  evenOdds_FH_Bet: number;
  isAvailableOE: boolean;
  isAvailableOE_FH: boolean;
  stDatabaseId: number;
  info: string;
}

export interface SectionContent {
  id: number;
  __component: string;
  title: string | null;
  content: string;
  defaultOpen?: boolean;
  menuId?: string | null;
}

export interface MenuItem {
  id: number;
  menuId: string;
  menuName: string;
  menuOrder: number;
}

export interface League {
  id: number;
  leagueId: string;
  leagueId_cigapi: string;
  leagueName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  MainSection: {
    id: number;
    title: string;
    content: string;
  };
  Section1: SectionContent[];
  SectionWithMenu1: MenuItem[];
  SectionWithMenu1Content: SectionContent[];
  Section2: SectionContent[];
  localizations: {
    data: any[];
  };
}
