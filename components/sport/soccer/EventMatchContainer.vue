<template>
    <div class="match-container">
        <div class="match-header-wrapper-bg">
            <img src="/img/soccer/match-container.png" alt="">
        </div>
        <div class="match-header-wrapper">
            <div class="match-header">
                <div class="event-title">{{ props.eventTitle }}</div>
                <div class="tournament-wrapper">
                    <div><img src="/img/soccer/icn-soccer.svg" alt=""></div>
                    <div class="tournament-text">{{ props.tournamentText }}</div>
                </div>
            </div>
        </div>
        <div class="match-header-bg">
            <img class="match-header-logo" src="/img/soccer/event-logo.png" alt="">
        </div>
        <div class="match-content-container">
            <div class="match-content-wrapper-base">
                <div class="match-content-wrapper-1">
                    <div>{{ props.matchRunningTime }}</div>
                    <div v-if="isRunningMatch"><img src="/img/soccer/icn-play-live.svg" alt=""></div>
                </div>
                <div class="match-content-wrapper-2">
                    <span class="team-text">{{ props.homeName }}</span>
                    <span><img :src="props.homeIcon" :alt="props.homeIconAlt"></span>
                    <span class="score-text">{{ props.homeScore }}</span>
                    <span class="score-text">:</span>
                    <span class="score-text">{{ props.awayScore }}</span>
                    <span><img :src="props.awayIcon" :alt="props.awayIconAlt"></span>
                    <span class="team-text">{{ props.awayName }}</span>
                </div>
                <div class="match-content-wrapper-3">
                    <custom-button-7 :label="`1`" :label2="homeOdds" :designType="`2`"
                        :oddsIcon="`/img/soccer/icn-odds-up.svg`"></custom-button-7>
                    <custom-button-7 :label="`X`" :label2="awayOdds" :designType="`2`"
                        :oddsIcon="`/img/soccer/icn-odds-down.svg`"></custom-button-7>
                    <custom-button-7 :label="drawOdds" :labelDisable="true" :designType="`2`"
                        :oddsIcon="`/img/soccer/icn-odds-lock.svg`"></custom-button-7>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    eventTitle: {
        type: String,
        default: ''
    },
    eventLogo: {
        type: String,
        default: ''
    },
    eventLogoAlt: {
        type: String,
        default: ''
    },
    tournamentIcon: {
        type: String,
        default: ''
    },
    tournamentIconAlt: {
        type: String,
        default: ''
    },
    tournamentText: {
        type: String,
        default: ''
    },
    matchRunningTime: {
        type: String,
        default: ''
    },
    isRunningMatch: {
        type: Boolean,
        default: false
    },
    homeName: {
        type: String,
        default: ''
    },
    homeScore: {
        type: String,
        default: ''
    },
    homeIcon: {
        type: String,
        default: ''
    },
    homeIconAlt: {
        type: String,
        default: ''
    },
    awayName: {
        type: String,
        default: ''
    },
    awayScore: {
        type: String,
        default: ''
    },
    awayIcon: {
        type: String,
        default: ''
    },
    awayIconAlt: {
        type: String,
        default: ''
    },
    homeOdds: {
        type: String,
        default: ''
    },
    awayOdds: {
        type: String,
        default: ''
    },
    drawOdds: {
        type: String,
        default: ''
    },
});
</script>

<style lang="scss" scoped>
.match-container {
    flex-direction: column;
    display: flex;
    position: relative;
    // max-width: 350px;
    max-width: 299px;
    min-height: 193px;
    flex-shrink: 0;
    background: #151518;
    stroke-width: 1.5px;
    stroke: rgba(0, 0, 0, 0.00);
    border-radius: 10px 8px 10px 8px;
}

.match-header-wrapper-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: contents;
    z-index: 0;
    position: absolute;
    background-size: cover;
    justify-content: center;
    background-position: center center;
}

.match-header-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

.match-content-container {
    position: absolute;
    top: 57px;
    width: -webkit-fill-available;
}

.match-content-wrapper-base {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.match-content-wrapper-1 {
    padding: 0.4rem 0.7rem 0.4rem 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #EBC76E;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.match-content-wrapper-2 {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;

    gap: 0.5rem;

    .team-text {
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .score-text {
        color: #EBC76E;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}

.match-content-wrapper-3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    gap: 0.7rem;
    padding-top: 0.7rem;
}

.match-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.7rem 0 0 0.7rem;
}

.match-header-bg {
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 10px 8px 0px 0px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
    width: 100%;
    height: 54px;
    flex-shrink: 0;
    z-index: 1;
}

.match-header-logo {
    display: flex;
    position: absolute;
    top: 2px;
    right: 2px;
    height: 54px;
    flex-shrink: 0;
    z-index: 2;
}

.event-title {
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.tournament-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.3rem;
}

.tournament-text {
    color: #EBC76E;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>