<template>
    <main-content :main-title-text="mainTitleText" :main-content-text="mainContentText"></main-content>

    <div style="padding-top: 2rem;"></div>

    <!-- section 1 -->
    <accordion-h2-style-1 v-if="section1?.design === '1'" style="margin-top: 1rem;" :section-title="section1?.title"
        :section-content="section1?.content" :h3-content-data="section1?.contentListH3">
    </accordion-h2-style-1>

    <!-- hot matches -->
    <sport-soccer-hot-match-section></sport-soccer-hot-match-section>

    <!-- livescore -->
    <aside-content style="margin-top: 30px;" :key="asideTitleTextLiveMatch" :aside-title-text="asideTitleTextLiveMatch"
        :aside-content-text="asideContentTextLiveMatch"></aside-content>

    <!-- menu -->
    <div style="padding-top: 2rem;"></div>
    <sport-soccer-live-score-tab-menu></sport-soccer-live-score-tab-menu>

    <div style="padding-top: 2rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <accordion-h2-style-1 v-if="selectedMenuContent?.design === '1' && selectedMenuId !== 'sport'"
        style="margin-top: 1rem" :section-title="selectedMenuContent?.title"
        :section-content="selectedMenuContent?.content" :h3-content-data="selectedMenuContent?.contentListH3">
    </accordion-h2-style-1>

    <sport-soccer-menu-tab-bet-sports v-if="selectedMenuId === 'sport'"></sport-soccer-menu-tab-bet-sports>

    <!-- menu 2 -->
    <div style="padding-top: 3rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu2" :tab-menu-list="tabMenuList2"></tab-menu>

    <sport-soccer-menu-tab-football v-if="selectTabMenu2_MenuTabId === 'football'"></sport-soccer-menu-tab-football>

    <div style="padding-top: 2rem;"></div>

    <sport-soccer-bonus-section></sport-soccer-bonus-section>

    <div style="padding-top: 2rem;"></div>

    <sport-soccer-game-available-section :menu-tab-id="selectTabMenu2_MenuTabId"
        :focus-title="selectTabMenu2_FocusTitle"></sport-soccer-game-available-section>

    <!-- section 2 -->
    <accordion-h2-style-1 v-if="section2?.design === '1'" style="margin-top: 1rem;" :section-title="section2?.title"
        :section-content="section2?.content" :h3-content-data="section2?.contentListH3" :h4-content-data="section2?.contentListH4">
    </accordion-h2-style-1>
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());

/* main title */
const mainTitleText = ref(content.value.Sport.Soccer.main.title);
const mainContentText = ref(content.value.Sport.Soccer.main.content);
const section1 = ref(content.value.Sport.Soccer.section1);
const section2 = ref(content.value.Sport.Soccer.section2);

const selectedMenuId = ref('');
const selectedMenuContent = ref();
const tabMenuList = ref(content.value.Sport.Soccer.sectionWithMenu1.menuTab);
const tabMenuList2 = ref(content.value.Sport.Soccer.sectionWithMenu2.menuTab);

const asideTitleText = ref('');
const asideContentText = ref('');
const asideContentShowBetBoost = ref(false);

const asideTitleTextLiveMatch = ref(content.value.Sport.Soccer.sectionLiveSoccerMatch.title);
const asideContentTextLiveMatch = ref(content.value.Sport.Soccer.sectionLiveSoccerMatch.content);

function selectTabMenu(value: string) {
    if (!value) {
        value = content.value.Sport.Soccer.sectionWithMenu1.menuTab[0].id;
        selectedMenuId.value = value;
    }

    const selectedMenu = content.value.Sport.Soccer.sectionWithMenu1.menuContent.find(
        (content) => content.menuTabId === value
    );

    selectedMenuId.value = selectedMenu?.menuTabId || '';
    selectedMenuContent.value = selectedMenu;
}

const selectTabMenu2_MenuTabId = ref('');
const selectTabMenu2_FocusTitle = ref(false);

function selectTabMenu2(value: string) {
    if (!value) {
        value = content.value.Sport.Soccer.sectionWithMenu2.menuTab[0].id;
    }

    const selectedMenu = content.value.Sport.Soccer.sectionWithMenu2.menuContent.find(
        (content) => content.menuTabId === value
    );

    //"menuTabId": "football",
    if (value === 'football') {
        asideTitleText.value = selectedMenu?.title || '';
        asideContentText.value = selectedMenu?.content || '';
        asideContentShowBetBoost.value = selectedMenu?.showBetBoost || false;
    }

    selectTabMenu2_MenuTabId.value = selectedMenu?.menuTabId || '';
    selectTabMenu2_FocusTitle.value = selectedMenu?.focusTitle || false;

    console.log('selectTabMenu2_MenuTabId.value', selectTabMenu2_MenuTabId.value)
    console.log('selectTabMenu2_FocusTitle.value', selectTabMenu2_FocusTitle.value)
}

onMounted(() => {
    selectTabMenu('');
    selectTabMenu2('');
})
</script>

<style lang="scss" scoped>
.break-space {
    padding-bottom: 1rem;
}
</style>