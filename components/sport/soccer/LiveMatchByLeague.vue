<template>
    <!-- sectionWithMenuLeague -->
    <tab-menu v-if="leagueList" style="margin-top: 30px;" @select-tab-menu="selectTabMenuLeague"
        :tab-menu-list="leagueList"></tab-menu>
    <br>
    <div style="margin: 0 0 0 1rem;" class="soccer-hot-match-wrapper">
        <sport-soccer-match-container v-for="(match, index) in eventMatchList" :key="index"
            :tournamentText="match.tournamentText" :matchRunningTime="match.matchRunningTime"
            :isRunningMatch="match.isRunningMatch" :homeName="match.homeName" :homeScore="match.homeScore"
            :homeIcon="match.homeIcon" :homeIconAlt="match.homeIconAlt" :awayName="match.awayName"
            :awayScore="match.awayScore" :awayIcon="match.awayIcon" :awayIconAlt="match.awayIconAlt"
            :homeOdds="match.homeOdds" :awayOdds="match.awayOdds" :drawOdds="match.drawOdds">
        </sport-soccer-match-container>
    </div>
</template>

<script setup lang="ts">
import { useSportStore } from "~/stores/sport";
const { runningLiveScoreByLeague, leagueList } = storeToRefs(useSportStore());

const eventMatchList = ref([]);
const selectedLeagueMenuId = ref('');

onMounted(() => {
    selectTabMenuLeague('');
})

function selectTabMenuLeague(value: string) {
    if (!value) {
        value = leagueList.value[0].id;
        selectedLeagueMenuId.value = value;
    }

    const selectedMenu = leagueList.value.find(
        (menu) => menu.id === value
    );

    selectedLeagueMenuId.value = selectedMenu?.id || '';
    
    mapMatch(selectedLeagueMenuId.value);
}

function mapMatch(selectedLeagueMenuId: String) {    
    const matches = runningLiveScoreByLeague.value.filter(
        (matchContent) => matchContent.attributes.leagueId === selectedLeagueMenuId
    );
    
    eventMatchList.value = [];
    matches.forEach((item) => {
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

        eventMatchList.value.push(record);
    });
}
</script>

<style lang="scss" scoped>
.soccer-hot-match-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 1rem;
    gap: 1rem;
    padding-right: 1rem;
}
</style>