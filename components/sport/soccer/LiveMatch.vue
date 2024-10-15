<template>
    <div v-if="runningLiveScore.length > 0" class="live-match-bg">
        <div style="margin: 1rem 1rem 0.5rem 1rem;" class="live-match-title">
            Explore More Soccer Betting Leagues
        </div>

        <div class="live-match-wrapper" style="margin-top: 1rem;">
            <div class="live-match-container" v-for="(item, index) in runningLiveScore" :key="index">
                <div style="margin-left: 0.7rem;" class="live-match-header">
                    <img class="league-img" src="/img/soccer/icn-flag-placeholder.svg"
                        :alt="item.attributes.leagueName">
                    <button class="open-match-btn">
                        <img src="/img/soccer/icn-open-link.svg" alt="">
                    </button>
                </div>

                <p style="margin: 1rem 1rem 1rem 0.7rem;" class="league-title">{{ item.attributes.leagueName }}</p>

                <span class="match-state-text" style="padding: 0.5rem;">{{ item.attributes.matchState }}</span>

                <table style="border-left: solid 2px #CCAB67; margin: 0 0.5rem 0 0.5rem;">
                    <tr>
                        <td class="match-team-text">
                            <img :src="item?.attributes?.homeFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item?.attributes?.homeFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="item.attributes.homeName" class="team-flag-icn" />
                            {{ item.attributes.homeName }}
                        </td>
                        <td class="match-score-text">{{ item.attributes.homeScore }}</td>
                    </tr>
                    <tr>
                        <td class="match-team-text">
                            <img :src="item?.attributes?.awayFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item?.attributes?.awayFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="item.attributes.awayName" class="team-flag-icn" />
                            {{ item.attributes.awayName }}
                        </td>
                        <td class="match-score-text">{{ item.attributes.awayScore }}</td>
                    </tr>
                </table>
                <div
                    style="display: flex; justify-content: center; align-content: center; text-align: center; margin: 1rem;">
                    <button class="live-match-btn">Bet More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSportStore } from "~/stores/sport";
const { runningLiveScore } = storeToRefs(useSportStore());
</script>

<style lang="scss" scoped>
.live-match-title {
    color: #181818;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    padding-top: 1rem;
}

.open-match-btn {
    margin-right: 0.3rem;
}

.live-match-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.league-img {
    border-radius: 3px;
    // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    max-width: 41.754px;
    max-height: 34px;
    flex-shrink: 0;
    margin-top: 0.7rem;
}

.league-title {
    color: #D9D9D9;
    font-size: 16px;
    font-weight: 600;
}

.live-match-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

}

.live-match-container {
    margin: 0 1rem 1rem 1rem;
    min-width: 264px;
    flex-shrink: 0;
    fill: #181818;
    stroke-width: 1px;
    stroke: #CCAB67;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    background-image: url('/img/bet-boost-container.png');
    background-repeat: no-repeat;
    background-size: cover;
    // padding: 30%;
    border-radius: 0 8px 8px 0;
}

.live-match-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40px;
    flex-shrink: 0;
    border-radius: 15px;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));

    color: #FFDBAA;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.live-match-img {
    width: 95px;
    height: 29.9px;
}

.live-match-odds-from-text {
    text-decoration: line-through;
    margin-left: 0.3rem;
}

.match-team-text {
    color: #D9D9D9;
    font-size: 14px;
    font-weight: 400;
    padding: 0.3rem 0 0.3rem 0;
}

.match-score-text {
    color: #EBC76E;
    font-size: 14px;
    font-weight: 600;
}

.match-state-text {
    color: #EBC76E;
    font-size: 14px;
}

.live-match-team-score-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-content: center;
}

.team-flag-icn {
    max-width: 18px;
    max-height: 18px;
    margin-left: 0.5rem;
    margin-right: 0.3rem;
    vertical-align: middle;
}

.live-match-bg {
    background: linear-gradient(100deg, #EBC76E 0%, #BA8C4E 100%);
    padding-bottom: 1rem;
}

@media only screen and (max-width:475px) {
    .live-match-title {
        font-size: 14px;
    }

    .league-title {
        font-size: 14px;
    }

    .match-state-text {
        font-size: 14px;
    }

    .match-team-text {
        font-size: 12px;
    }

    .match-score-text {
        font-size: 12px;
    }

    .live-match-btn {
        font-size: 14px;
    }
}
</style>