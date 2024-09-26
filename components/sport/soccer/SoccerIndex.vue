<template>
    <main-content :main-title-text="content.main.title" :main-content-text="content.main.content"></main-content>
    <br>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section2.title"
        :section-content="content.section2.content">
    </accordion-h2-style-2>

    <!-- sectionWithMenuLeague -->
    <tab-menu style="margin-top: 30px;" @select-tab-menu="selectTabMenuLeague"
        :tab-menu-list="tabMenuLeagueList"></tab-menu>
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

    <br>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <sport-soccer-menu-tab-football-betting
        v-if="selectedMenuId === 'football-betting'"></sport-soccer-menu-tab-football-betting>
    <sport-soccer-menu-tab-football-odds
        v-if="selectedMenuId === 'football-odds'"></sport-soccer-menu-tab-football-odds>
    <sport-soccer-menu-tab-football-leagues
        v-if="selectedMenuId === 'football-leagues'"></sport-soccer-menu-tab-football-leagues>

    <br>

    <accordion-h2-style2 :section-title="content.section3.titleH2" :section-content="content.section3.contentH2">
    </accordion-h2-style2>

    <br>

    <accordion-h2-style-2 :section-title="content.section4.titleH2" :section-content="content.section4.contentH2">
    </accordion-h2-style-2>

    <!-- <br v-if="content.section4.showBetBooat"> -->
    <sport-soccer-bet-boost style="margin-top: 30px;" v-if="content.section4.showBetBooat"></sport-soccer-bet-boost>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section5.titleH2"
        :section-content="content.section5.contentH2">
    </accordion-h2-style-2>

    <br>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section6.titleH2"
        :section-content="content.section6.contentH2">
    </accordion-h2-style-2>

    <br>

    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section6.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>

    <br>

    <accordion-h2-style-2 :section-title="content.section7.titleH2" :section-content="content.section7.contentH2">
    </accordion-h2-style-2>

    <br>

    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section7.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import content from '~/assets/script/contentSoccer.json'

const tabMenuList = ref(content.sectionWithMenu1.menuTab);
const selectedMenuId = ref('football-betting');

function selectTabMenu(value: string) {
    if (!value) {
        value = tabMenuList.value[0].id;
        selectedMenuId.value = value;
    }

    const selectedMenu = tabMenuList.value.find(
        (menu) => menu.id === value
    );

    selectedMenuId.value = selectedMenu?.id || '';
}

const eventMatchList = ref([]);
const tabMenuLeagueList = ref(content.sectionWithMenuLeague.menuTab);
const tabMenuLeagueContentList = ref(content.sectionWithMenuLeague.menuContent);
const selectedLeagueMenuId = ref('');
function selectTabMenuLeague(value: string) {
    if (!value) {
        value = tabMenuLeagueList.value[0].id;
        selectedLeagueMenuId.value = value;
    }

    const selectedMenu = tabMenuLeagueList.value.find(
        (menu) => menu.id === value
    );

    const selectedMenuContent = tabMenuLeagueContentList.value.find(
        (menuContent) => menuContent.menuTabId === value
    );

    selectedLeagueMenuId.value = selectedMenu?.id || '';
    eventMatchList.value = selectedMenuContent?.hotMatchList || [];
}

onMounted(() => {
    selectTabMenu('');
    selectTabMenuLeague('');
})
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