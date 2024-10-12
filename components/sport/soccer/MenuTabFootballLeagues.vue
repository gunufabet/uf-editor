<template>
    <br>
    <accordion-h2 :section-title="sportsContent?.section1?.titleH2"
        :section-content="sportsContent?.section1?.contentH2">
    </accordion-h2>

    <div v-for="(item, index) in sportsContent?.section1?.contentListH3" :key="index">
        <accordion-h3 style="margin-left: 1rem;" :section-title="item.title" :section-content="item.content"
            :with-break-line="true" :defaultOpenPanel="item.defaultOpen">
        </accordion-h3>

        <sport-soccer-bet-boost v-if="item.showBetBoost"></sport-soccer-bet-boost>

        <br v-if="item.showLeagueStandingButton || item.showLeagueScheduleButton">
        <div class="football-league-btn-wrapper" v-if="item.showLeagueStandingButton || item.showLeagueScheduleButton">
            <custom-button-6 v-if="item.showLeagueStandingButton" id="premier-league-standing"
                label="English Premier League Standings" @click="GoToLeagueStanding"></custom-button-6>
            <custom-button-6 v-if="item.showLeagueScheduleButton" id="premier-league-schedule"
                label="English Premier League Schedule"></custom-button-6>
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
const router = useRouter();

async function GoToLeagueStanding() {
    const localePath = useLocalePath();
    const router = useRouter();

    return router.push(localePath({ name: 'sports-soccer-league', params: { league: 'english-premier-league' } }));
}
</script>

<style lang="scss" scoped>
.football-league-btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>