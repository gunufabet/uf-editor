<template>
    <div class="bet-boost-bg">
        <div style="padding: 1rem 1rem 1rem 1rem;">
            <img class="bet-boost-img" style="margin-right: 0.5rem;" src="/img/bet-boost-black.png" alt="">            
        </div>

        <div class="bet-boost-wrapper">
            <div class="bet-boost-container" v-for="(list, betBoostListIndex) in betBoostList" :key="betBoostListIndex">
                <div class="item-container" v-for="(content, index) in list.betList" :key="index">
                    <div v-if="index === 0" style="margin-top: 0.4rem;"></div>
                    <div class="item-container-league-name">{{ content.leagueName }}</div>
                    <div class="item-container-team-match">{{ content.homeName }}<span
                            class="item-container-team-match-vs">vs</span>{{ content.awayName }}</div>
                    <div style="display: flex; flex-flow: row;">
                        <div style="display: flex; " class="item-container-match-score">{{ content.homeScore }} - {{
                content.awayScore }}</div>
                        <div class="item-container-match-odds">{{ content.odds }}</div>
                    </div>

                    <div v-if="index < list.betList.length - 1" class="break-line"></div>
                </div>

                <div
                    style="display: flex; justify-content: center; align-content: center; text-align: center; margin: 1rem;">
                    <button class="bet-boost-btn">Odds : <span class="bet-boost-odds-from-text">{{ list.betBoostOddFrom
                            }}</span><img class="bet-boost-odds-img" src="/img/soccer/icn-bet-boots-odds-to.svg"
                            alt=""><span class="bet-boost-odds-to-text">{{ list.betBoostOddTo }}</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import content from '~/assets/script/betboost.json'
const betBoostList = ref(content.betBoostList);
</script>

<style lang="scss" scoped>
.bet-boost-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    // padding-bottom: 1rem;
}

.bet-boost-container {
    margin: 0 1rem 1rem 1rem;
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
    border-radius: 0 8px 8px 0;
}

.item-container {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem 0 1rem;
    // width: 100%;

    &-league-name {
        margin: 0.1rem 0 0.3rem 0;
        color: #8B8B8B;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &-team-match {
        margin: 0.1rem 0 0.3rem 0;
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &-team-match-vs {
        color: #AE874B;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0.3rem 0 0.3rem;
    }

    &-match-score {
        margin: 0.1rem 0 0.1rem 0;
        flex-grow: 1;
        color: #EBC76E;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &-match-odds {
        color: #8B8B8B;
        font-size: 14px;
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

.bet-boost-img {
    // width: 25px;
    height: 40px;
    z-index: 1;
}

.bet-boost-odds-from-text {
    text-decoration: line-through;
    margin-left: 0.3rem;
}

.bet-boost-odds-to-text {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.bet-boost-odds-img {
    margin: 0 0.4rem 0 0.4rem;
}

.bet-boost-bg {    
    background: linear-gradient(100deg, #EBC76E 0%, #BA8C4E 100%);    
    padding-bottom: 1rem;    
}
</style>