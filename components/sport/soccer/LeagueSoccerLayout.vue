<template>    
    <div v-if="showBetBoost" style="padding-top: 2rem;"></div>
    <sport-soccer-bet-boost v-if="showBetBoost"></sport-soccer-bet-boost>

    <div class="football-league-btn-wrapper"
        v-if="showLeagueButton || showLeagueScheduleButton || showLeagueScheduleButton" style="padding-top: 2rem;">
        
        <custom-button-6 v-if="showLeagueButton" :id="leagueUrl" :label="leagueButtonName"
            @click="GoToLeague(leagueUrl, leagueId, leagueId_cigapi)"></custom-button-6>

        <custom-button-6 v-if="showLeagueStandingButton" :id="leagueStandingUrl"
            :label="leagueStandingButtonName"
            @click="GoToLeagueStanding(leagueStandingUrl, leagueId)"></custom-button-6>

        <custom-button-6 v-if="showLeagueScheduleButton" :id="leagueScheduleUrl"
            @click="GoToLeagueSchedule(leagueScheduleUrl, leagueId)"
            :label="leagueScheduleButtonName"></custom-button-6>

    </div>
    
    <sport-soccer-live-match v-if="showRunningMatch" style="padding-top: 1rem;"></sport-soccer-live-match>    
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const router = useRouter();

const props = defineProps({
    leagueId: {
        type: String,
        default: ''
    },
    leagueId_cigapi: {
        type: String,
        default: ''
    },
    showRunningMatch: {
        type: Boolean,
        default: false
    },
    showBetBoost: {
        type: Boolean,
        default: false
    },
    showLeagueStandingButton: {
        type: Boolean,
        default: false
    },
    showLeagueScheduleButton: {
        type: Boolean,
        default: false
    },
    showLeagueButton: {
        type: Boolean,
        default: false
    },
    leagueStandingButtonName: {
        type: Boolean,
        default: false
    },
    leagueScheduleButtonName: {
        type: Boolean,
        default: false
    },
    leagueButtonName: {
        type: Boolean,
        default: false
    },
    leagueStandingUrl: {
        type: Boolean,
        default: false
    },
    leagueScheduleUrl: {
        type: Boolean,
        default: false
    },
    leagueUrl: {
        type: Boolean,
        default: false
    },
});

async function GoToLeagueStanding(routeUrlName: any, leagueId: any) {
    return router.push(localePath({ name: 'sports-soccer-standing-leagueStanding', params: { leagueStanding: routeUrlName }, query: { leagueId: leagueId } }));
}

async function GoToLeagueSchedule(routeUrlName: any, leagueId: any) {
    return router.push(localePath({ name: 'sports-soccer-schedule-leagueSchedule', params: { leagueSchedule: routeUrlName }, query: { leagueId: leagueId } }));
}

async function GoToLeague(routeUrlName: any, leagueId: any, leagueId_cigapi: any) {
    return router.push(localePath({ name: 'sports-soccer-league-league', params: { league: routeUrlName }, query: { leagueId: leagueId, leagueId2: leagueId_cigapi } }));
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