<template>
    <br>
    <accordion-h2 :section-title="sportsContent?.section1?.titleH2"
        :section-content="sportsContent?.section1?.contentH2">
    </accordion-h2>

    <div v-for="(item, index) in sportsContent?.section1?.contentListH3" :key="index">
        <accordion-h3 style="margin-left: 1rem;" :section-title="item.title" :section-content="item.content"
            :with-break-line="true" :defaultOpenPanel="item.defaultOpen">
        </accordion-h3>

        <br v-if="item.showBetBoost">
        <sport-soccer-bet-boost v-if="item.showBetBoost"></sport-soccer-bet-boost>

        <br v-if="item.showLeagueStandingButton || item.showLeagueScheduleButton">
        <div class="football-league-btn-wrapper" v-if="item.showLeagueStandingButton || item.showLeagueScheduleButton">
            <custom-button-6 v-if="item.showLeagueStandingButton" :id="item.showLeagueStandingButtonInfo.buttonId"
                :label="item.showLeagueStandingButtonInfo.buttonLabel"
                @click="GoToLeagueStanding(item.showLeagueStandingButtonInfo.routeUrlName, item.showLeagueStandingButtonInfo.leagueId)"></custom-button-6>

            <custom-button-6 v-if="item.showLeagueScheduleButton" :id="item.showLeagueScheduleButtonInfo.buttonId"
                @click="GoToLeagueSchedule(item.showLeagueScheduleButtonInfo.routeUrlName, item.showLeagueScheduleButtonInfo.leagueId)"
                :label="item.showLeagueScheduleButtonInfo.buttonLabel"></custom-button-6>

            <custom-button-6 v-if="item.showLeagueButton" :id="item.showLeagueButtonInfo.buttonId"
                :label="item.showLeagueButtonInfo.buttonLabel"
                @click="GoToLeague(item.showLeagueButtonInfo.routeUrlName, item.showLeagueButtonInfo.leagueId)"></custom-button-6>
        </div>
        <br v-if="item.showRunningMatch">
        <sport-soccer-live-match v-if="item.showRunningMatch"></sport-soccer-live-match>
        <br v-if="item.showRunningMatch">
    </div>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import content from '~/assets/script/contentSoccer.json'
const sportsContent = ref(content.sectionWithMenu1.menuContent.find(
    (content) => content.menuTabId === 'football-leagues'
));
const localePath = useLocalePath();
const router = useRouter();

async function GoToLeagueStanding(routeUrlName: any, leagueId: any) {
    return router.push(localePath({ name: 'sports-soccer-standing-leagueStanding', params: { leagueStanding: routeUrlName }, query: { leagueId: leagueId } }));
}

async function GoToLeagueSchedule(routeUrlName: any, leagueId: any) {
    return router.push(localePath({ name: 'sports-soccer-schedule-leagueSchedule', params: { leagueSchedule: routeUrlName }, query: { leagueId: leagueId } }));
}

async function GoToLeague(routeUrlName: any, leagueId: any) {
    return router.push(localePath({ name: 'sports-soccer-league-league', params: { league: routeUrlName }, query: { leagueId: leagueId } }));
}
</script>

<style lang="scss" scoped>
.football-league-btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;

    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

@media only screen and (max-width:475px) {
    .football-league-btn-wrapper {
        justify-content: start;
    }
}
</style>