<template>
    <div style="margin: 1rem;">
        <img src="/img/bet-boost.svg" alt="">
    </div>

    <div class="bet-boost-container">        
        <div class="item-container" v-for="(content, index) in betBoostList" :key="index">
            <div v-if="index === 0" style="margin-top: 0.4rem;"></div>
            <div class="item-container-league-name">{{ content.leagueName }}</div>
            <div class="item-container-team-match">{{ content.homeName }}<span
                    class="item-container-team-match-vs">vs</span>{{ content.awayName }}</div>
            <div style="display: flex; flex-flow: row;">
                <div style="display: flex; " class="item-container-match-score">{{ content.homeScore }} - {{
            content.awayScore }}</div>
                <div class="item-container-match-odds">{{ content.odds }}</div>
            </div>

            <div v-if="index < betBoostList.length - 1" class="break-line"></div>
        </div>

        <div style="display: flex; justify-content: center; align-content: center; text-align: center; margin: 1rem;">
            <button class="bet-boost-btn">Odds</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BetBoost } from "~/types/strapi-model";

const betBoostList: BetBoost[] = [
    { leagueName: 'English Premier League', homeName: 'Manchester United', awayName: 'Manchester City', homeScore: 2, awayScore: 1, odds: '@6.12' },
    { leagueName: 'UAE Pro League U21', homeName: 'Al Bataeh Club U21', awayName: 'Al Dhafra U21', homeScore: 0, awayScore: 0, odds: '@4.6' },
    { leagueName: 'UAE Pro League U21', homeName: 'Al Nasr Dubai U21', awayName: 'Bani Yas Vlus Test Long U21', homeScore: 2, awayScore: 1, odds: '@8.4' },
];

</script>

<style lang="scss" scoped>
.bet-boost-container {
    margin: 1rem;
    max-width: 319px;
    min-height: 279px;
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
}

.item-container {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem 0 1rem;
    // width: 100%;

    &-league-name {
        margin: 0.1rem 0 0.1rem 0;
        color: #8B8B8B;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &-team-match {
        margin: 0.1rem 0 0.1rem 0;
        color: #FFF;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &-team-match-vs {
        color: #AE874B;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0.3rem 0 0.3rem;
    }

    &-match-score {
        margin: 0.1rem 0 0.1rem 0;
        flex-grow: 1;
        color: #EBC76E;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &-match-odds {
        color: #8B8B8B;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.break-line {
    height: 1px;
    background: #29272A;
    margin: 0.5rem 0 0.3rem 0;
}

.bet-boost-btn {    
    align-content: center;
    width: 90%;
    height: 40px;
    flex-shrink: 0;
    border-radius: 15px;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));

    color: #FFDBAA;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>