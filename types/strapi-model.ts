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

export interface Odds {
  socOddsId: number;
  socOddsIdFH: number;
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
  isHomeGiveFH: boolean;
  hdp: number;
  hdpOdds: number;
  hdpSpread: number;
  hdpFH: number;
  hdpOddsFH: number;
  hdpSpreadFH: number;
  ou: number;
  ouOdds: number;
  ouSpread: number;
  ouFH: number;
  ouOddsFH: number;
  ouSpreadFH: number;
  isOdd: boolean;
  oeOdds: number;
  oeSpread: number;
  isOddFH: boolean;
  oeOddsFH: number;
  oeSpreadFH: number;
  hasHdp: boolean;
  hasOU: boolean;
  hasOE: boolean;
  hasX12: boolean;
  hasHdpFH: boolean;
  hasOUFH: boolean;
  hasOEFH: boolean;
  hasX12FH: boolean;
  isPause: boolean;
  isPauseFH: boolean;
  isLastCall: boolean;
  isRun: boolean;
  runHomeScore: number;
  runAwayScore: number;
  isInetBet: boolean;
  isInetBetFH: boolean;
  isDanger: boolean;
  live: boolean;
  inetMinTransLimit: number;
  inetMaxTransLimit: number;
  inetMaxOUTransLimit: number;
  inetMinTransLimitFH: number;
  inetMaxTransLimitFH: number;
  inetMaxOUTransLimitFH: number;
  hasOddsDiff: boolean;
  hasSpreadDiff: boolean;
  hasOddsDiffFH: boolean;
  hasSpreadDiffFH: boolean;
  hasRunning: boolean;
  hasFirstHalf: boolean;
  workingDate: string;
  isHalfTime: boolean;
  curMinute: string;
  status: string;
  x121Odds: number;
  x12XOdds: number;
  x122Odds: number;
  x121OddsFH: number;
  x12XOddsFH: number;
  x122OddsFH: number;
  closingDate: string;
  homeId: number;
  awayId: number;
  channel: string;
  rtsMatchId: string;
  nInfo: string;
  nInfoC: string;
  nInfoT: string;
  nInfoV: string;
  nInfoJ: string;
  nInfoK: string;
  todayDate: string;
  eventKey: string;
  isAvailableHDP: boolean;
  isAvailableOU: boolean;
  isAvailable1X2: boolean;
  isAvailableHDPFH: boolean;
  isAvailableOUFH: boolean;
  isAvailable1X2FH: boolean;
  matchDateAgain: string; // Assuming this is a repeat
  isMainMarket: boolean;
  oddOddsBet: number;
  evenOddsBet: number;
  oddOddsFHBET: number;
  evenOddsFHBET: number;
  isAvailableOE: boolean;
  isAvailableOEFH: boolean;
}
