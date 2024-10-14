<template>
    <div class="hot-match-bg">
        <div v-if="hotMatchList.length > 0" class="title-container">
            <div style="display: flex; margin-left: 1.3rem">
                <img style="margin-right: 0.3rem;" src="/img/soccer/icn-hot-black.svg" alt="hot matches">
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
    </div>
</template>

<script setup lang="ts">
import { useSportStore } from "~/stores/sport";
const { runningLiveScore } = storeToRefs(useSportStore());

const hotMatchList = ref([]);

onMounted(() => {
    mapMatch();
})

function mapMatch() {
    hotMatchList.value = [];
    runningLiveScore.value.forEach((item) => {
        let record = {
            tournamentText: item.attributes.leagueName,
            matchRunningTime: item.attributes.runningMatchMinute,
            isRunningMatch: true,
            homeName: item.attributes.homeName,
            homeScore: item.attributes.homeScore,
            homeIcon: item.attributes?.homeFlagImg?.data?.attributes?.flag || '',
            homeIconAlt: item.attributes.homeName,
            awayName: item.attributes.awayName,
            awayScore: item.attributes.awayScore,
            awayIcon: item.attributes?.awayFlagImg?.data?.attributes?.flag || '',
            awayIconAlt: item.attributes.awayName,
            homeOdds: "2.05",   // Use dynamic data if available
            awayOdds: "3.44",   // Use dynamic data if available
            drawOdds: "2"       // Use dynamic data if available
        };

        hotMatchList.value.push(record);
    });
}
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
    color: #181818;
    font-size: 12px;
    font-weight: 700;
}

.hot-match-text-2 {
    color: #181818;
    font-size: 12px;
    font-weight: 500;
    margin-left: 0.1rem;
}

.hot-match-bg {
    background: linear-gradient(100deg, #EBC76E 0%, #BA8C4E 100%);
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>