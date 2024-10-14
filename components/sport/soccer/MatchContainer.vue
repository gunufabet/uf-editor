<template>
    <div class="match-container">
        <div class="match-header">
            <div class="tournament-wrapper">
                <div><img src="/img/soccer/icn-soccer.svg" alt=""></div>
                <div class="tournament-text">{{ props.tournamentText }}</div>
            </div>
            <div v-if="isRunningMatch">
                <img src="/img/soccer/icn-play-live.svg" alt="" style="width: 37px; height: 15px;">
            </div>
        </div>
        <!-- <div class="bg-top-left-design">
            <svg xmlns="http://www.w3.org/2000/svg" width="299" height="179" viewBox="0 0 299 179" fill="none">
                <path
                    d="M0.5 10.5C0.5 5.25329 4.75329 1 10 1H289C294.247 1 298.5 5.2533 298.5 10.5V168.5C298.5 173.747 294.247 178 289 178H10C4.7533 178 0.5 173.747 0.5 168.5V10.5Z"
                    fill="url(#paint0_linear_169_1228)" stroke="url(#paint1_linear_169_1228)" />
                <defs>
                    <linearGradient id="paint0_linear_169_1228" x1="0" y1="0.5" x2="297.158" y2="124.901"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2B2B32" />
                        <stop offset="1" stop-color="#484141" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_169_1228" x1="0" y1="0.5" x2="54" y2="69.5"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EBC76E" />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div> -->
        <div class="match-content-container">
            <div class="match-content-wrapper-base">
                <div class="match-content-wrapper-2">
                    <div class="team-container" style="width: 40%; align-self: start;">
                        <div>
                            <!-- <img class="img-icon" :src="props.homeIcon" :alt="props.homeIconAlt"> -->
                            <img :src="props.homeIcon
                    ? 'data:image/png;base64,' + props.homeIcon
                    : '/img/soccer/icn-flag-placeholder.svg'
                    " :alt="props.homeIconAlt" class="img-icon" />
                        </div>
                        <div class="team-text">{{ props.homeName }}</div>
                    </div>
                    <div class="team-container">
                        <div>
                            <span class="score-text">{{ props.homeScore }}</span><span class="score-text"> :
                            </span><span class="score-text">{{
                    props.awayScore }}</span>
                        </div>
                        <div>
                            <span class="match-running-text">{{ props.matchRunningTime }}'</span>
                        </div>
                    </div>
                    <div class="team-container" style="width: 40%; ; align-self: start;">
                        <div>
                            <!-- <img class="img-icon" :src="props.awayIcon" :alt="props.awayIconAlt"> -->
                            <img :src="props.awayIcon
                    ? 'data:image/png;base64,' + props.awayIcon
                    : '/img/soccer/icn-flag-placeholder.svg'
                    " :alt="props.awayIconAlt" class="img-icon" />
                        </div>
                        <div class="team-text">{{ props.awayName }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="match-footer-container">
            <div class="match-content-wrapper-3">
                <custom-button-7 :label="`1`" :label2="homeOdds" :designType="`1`"
                    :oddsIcon="`/img/soccer/icn-odds-up.svg`"></custom-button-7>
                <custom-button-7 :label="`X`" :label2="awayOdds" :designType="`1`"
                    :oddsIcon="`/img/soccer/icn-odds-down.svg`"></custom-button-7>
                <custom-button-7 :label="drawOdds" :labelDisable="true" :designType="`1`"
                    :oddsIcon="`/img/soccer/icn-odds-lock.svg`"></custom-button-7>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
    min-width: 343px;
    min-height: 188px;
    flex-shrink: 0;
    background: linear-gradient(104deg, #2B2B32 0%, #484141 93.5%);
    stroke-width: 1px;
    stroke: #EBC76E;
    border-radius: 10px 8px 10px 8px;
}

.match-content-container {
    position: absolute;
    top: 47px;
    width: -webkit-fill-available;
}

.match-footer-container {
    position: absolute;
    bottom: 0;    
    width: -webkit-fill-available;

    border-radius: 0px 0px 10px 10px;
    background: linear-gradient(92deg, rgba(141, 107, 60, 0.25) 0.21%, rgba(103, 78, 43, 0.25) 53.22%, rgba(217, 217, 217, 0.06) 98.38%);
    backdrop-filter: blur(6px);
}

.match-content-wrapper-base {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.match-content-wrapper-2 {
    // padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    align-content: center;

    gap: 0.5rem;

    .team-text {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 0.3rem;
    }

    .score-text {
        color: #EBC76E;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .team-container {
        display: flex;
        flex-direction: column;
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
    padding: 0.5rem 0 0.5rem 0;
}

.match-header {
    display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    justify-content: space-between;
    padding: 0.6rem;
    z-index: 10;
}

.tournament-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    // margin-top: 0.3rem;    
}

.tournament-text {
    color: #EBC76E;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.match-running-text {
    color: #EBC76E;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: 0.3rem;
}

.img-icon {
    width: 43px;
    height: 43px;
}

.bg-top-left-design {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

@media only screen and (max-width:475px) {
    .match-container {
        min-height: 188px;
    }

    .match-content-wrapper-2 {
        .team-text {
            font-size: 12px;
        }

        .score-text {
            font-size: 24px;
        }
    }

    .tournament-text {
        font-size: 14px;
    }

    .match-running-text {
        font-size: 14px;
    }
}
</style>