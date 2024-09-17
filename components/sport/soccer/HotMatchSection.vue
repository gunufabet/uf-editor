<template>
    <div style="margin: 1rem;" class="title-container">
        <div style="display: flex;">
            <img style="margin-right: 0.3rem;" src="/img/soccer/icn-hot.svg" alt="hot matches">
        </div>
        <div>
            <span class="hot-match-text-1">{{ $t('sport.news.hot') }} </span>
            <span class="hot-match-text-2">{{ $t('sport.news.matches') }}</span>
        </div>
    </div>
    <div style="margin: 1rem;" class="hot-match-container">
        <sport-soccer-match-container v-for="(match, index) in hotMatchList" :key="index"
            :tournamentText="match.tournamentText" :matchRunningTime="match.matchRunningTime"
            :isRunningMatch="match.isRunningMatch" :homeName="match.homeName" :homeScore="match.homeScore"
            :homeIcon="match.homeIcon" :homeIconAlt="match.homeIconAlt" :awayName="match.awayName"
            :awayScore="match.awayScore" :awayIcon="match.awayIcon" :awayIconAlt="match.awayIconAlt"
            :homeOdds="match.homeOdds" :awayOdds="match.awayOdds" :drawOdds="match.drawOdds">
        </sport-soccer-match-container>
    </div>
</template>

<script setup lang="ts">
import content from '~/assets/script/content.json'
const hotMatchList = ref(content.Sport.Soccer.hotMatchList);
</script>

<style lang="scss" scoped>
.title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.hot-match-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
}

.hot-match-text-1 {
    color: #EBC76E;
    font-size: 12px;
    font-weight: 700;
}

.hot-match-text-2 {
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    margin-left: 0.1rem;
}
</style>