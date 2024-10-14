<template>
    <main-content :main-title-text="mainTitleText" :main-content-text="mainContentText"></main-content>

    <sport-banner style="margin-top: 30px;"></sport-banner>

    <accordion-h2 style="margin-top: 30px;" :section-title="sectionTitle" :section-content="sectionContent">
    </accordion-h2>
    <br>
    <accordion-h3 style="margin-left: 1rem; margin-bottom: 30px;" v-for="(item, index) in subContentData" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>

    <!-- hot matches -->
    <sport-soccer-hot-match-section></sport-soccer-hot-match-section>

    <!-- livescore -->
    <aside-content style="margin-top: 30px;" :key="asideTitleTextLiveMatch" :aside-title-text="asideTitleTextLiveMatch"
        :aside-content-text="asideContentTextLiveMatch"></aside-content>

    <sport-soccer-live-score-tab-menu></sport-soccer-live-score-tab-menu>

    <br>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <br>
    <sport-soccer-menu-tab-bet-sports v-if="selectedMenuId === 'sport'"></sport-soccer-menu-tab-bet-sports>
    <sub-main-content v-else :section-title="sectionTitleTabMenuSelected"
        :section-content="sectionContentTabMenuSelected" :section-sub-content="subContentDataTabMenuSelected"
        :section-title-h3="sectionTitleTabMenuSelectedH3" :section-content-h3="sectionContentTabMenuSelectedH3"
        :section-sub-content-h3="subContentDataTabMenuSelectedH3" :section-title-h4="sectionTitleTabMenuSelectedH4"
        :section-content-h4="sectionContentTabMenuSelectedH4" :section-sub-content-h4="subContentDataTabMenuSelectedH4"
        :section-content-h2-table-header="sectionContentH2TableHeader"
        :section-content-h2-table-content="sectionContentH2TableContent"
        :section-content-h3-table-header="sectionContentH3TableHeader"
        :section-content-h3-table-content="sectionContentH3TableContent"
        :section-content-h4-table-header="sectionContentH4TableHeader"
        :section-content-h4-table-content="sectionContentH4TableContent"></sub-main-content>

    <br>
    <tab-menu @select-tab-menu="selectTabMenu2" :tab-menu-list="tabMenuList2"></tab-menu>
    <aside-content :key="asideTitleText" :aside-title-text="asideTitleText"
        :aside-content-text="asideContentText"></aside-content>

    <br>
    <sport-soccer-bet-boost v-if="asideContentShowBetBoost"></sport-soccer-bet-boost>

    
    <sport-soccer-news-section></sport-soccer-news-section>
    <br>

    <sport-soccer-bonus-section></sport-soccer-bonus-section>

    <br>

    <sport-soccer-game-available-section :menu-tab-id="selectTabMenu2_MenuTabId"
        :focus-title="selectTabMenu2_FocusTitle"></sport-soccer-game-available-section>
</template>

<script setup lang="ts">
import type { SportSubContent } from "~/types/strapi-model";
import content from '~/assets/script/content.json'

/* main title */
const mainTitleText = ref(content.Sport.Soccer.main.title);
const mainContentText = ref(content.Sport.Soccer.main.content);

const selectedMenuId = ref('');
const tabMenuList = ref(content.Sport.Soccer.sectionWithMenu1.menuTab);
const tabMenuList2 = ref(content.Sport.Soccer.sectionWithMenu2.menuTab);

const asideTitleText = ref('');
const asideContentText = ref('');
const asideContentShowBetBoost = ref(false);

const asideTitleTextLiveMatch = ref(content.Sport.Soccer.sectionLiveSoccerMatch.title);
const asideContentTextLiveMatch = ref(content.Sport.Soccer.sectionLiveSoccerMatch.content);

// Ufabet Direct Website
const sectionTitle = ref(content.Sport.Soccer.section1.title);
const sectionContent = ref(content.Sport.Soccer.section1.content);
const subContentData = ref<SportSubContent[]>([]);

const sectionTitleTabMenuSelected = ref('');
const sectionContentTabMenuSelected = ref('');
const subContentDataTabMenuSelected = ref<SportSubContent[]>([]);
const sectionTitleTabMenuSelectedH3 = ref('');
const sectionContentTabMenuSelectedH3 = ref('');
const subContentDataTabMenuSelectedH3 = ref<SportSubContent[]>([]);
const sectionTitleTabMenuSelectedH4 = ref('');
const sectionContentTabMenuSelectedH4 = ref('');
const subContentDataTabMenuSelectedH4 = ref<SportSubContent[]>([]);

const sectionContentH2TableHeader = ref([]);
const sectionContentH2TableContent = ref([]);
const sectionContentH3TableHeader = ref([]);
const sectionContentH3TableContent = ref([]);
const sectionContentH4TableHeader = ref([]);
const sectionContentH4TableContent = ref([]);

function selectTabMenu(value: string) {
    if (!value) {
        value = content.Sport.Soccer.sectionWithMenu1.menuTab[0].id;
        selectedMenuId.value = value;
    }

    const selectedMenu = content.Sport.Soccer.sectionWithMenu1.menuContent.find(
        (content) => content.menuTabId === value
    );

    selectedMenuId.value = selectedMenu?.menuTabId || '';

    sectionTitleTabMenuSelected.value = selectedMenu?.title || '';
    sectionContentTabMenuSelected.value = selectedMenu?.content || '';
    if (selectedMenu?.contentList) {
        subContentDataTabMenuSelected.value = selectedMenu?.contentList.map((item: any) => ({
            title: item.title,
            content: item.content
        }));
    } else {
        subContentDataTabMenuSelected.value = selectedMenu?.contentList || [];
    }

    sectionTitleTabMenuSelectedH3.value = selectedMenu?.titleH3 || '';
    sectionContentTabMenuSelectedH3.value = selectedMenu?.contentH3 || '';
    if (selectedMenu?.contentListH3) {
        subContentDataTabMenuSelectedH3.value = selectedMenu?.contentListH3.map((item: any) => ({
            title: item.title,
            content: item.content
        }));
    } else {
        subContentDataTabMenuSelectedH3.value = selectedMenu?.contentListH3 || [];
    }

    sectionTitleTabMenuSelectedH4.value = selectedMenu?.titleH4 || '';
    sectionContentTabMenuSelectedH4.value = selectedMenu?.contentH4 || '';
    if (selectedMenu?.contentListH4) {
        subContentDataTabMenuSelectedH4.value = selectedMenu?.contentListH4.map((item: any) => ({
            title: item.title,
            content: item.content
        }));
    } else {
        subContentDataTabMenuSelectedH4.value = selectedMenu?.contentListH4 || [];
    }

    sectionContentH2TableHeader.value = selectedMenu?.contentH2Table?.header || [];
    sectionContentH2TableContent.value = selectedMenu?.contentH2Table?.content || [];
    sectionContentH3TableHeader.value = selectedMenu?.contentH3Table?.header || [];
    sectionContentH3TableContent.value = selectedMenu?.contentH3Table?.content || [];
    sectionContentH4TableHeader.value = selectedMenu?.contentH4Table?.header || [];
    sectionContentH4TableContent.value = selectedMenu?.contentH4Table?.content || [];
}

const selectTabMenu2_MenuTabId = ref('');
const selectTabMenu2_FocusTitle = ref(false);

function selectTabMenu2(value: string) {
    if (!value) {
        value = content.Sport.Soccer.sectionWithMenu2.menuTab[0].id;
    }

    const selectedMenu = content.Sport.Soccer.sectionWithMenu2.menuContent.find(
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
}

onMounted(() => {
    selectTabMenu('');
    selectTabMenu2('');

    subContentData.value = content.Sport.Soccer.section1.section1a.map((item: any) => ({
        title: item.title,
        content: item.content
    }));
})
</script>

<style lang="scss" scoped>
.break-space {
    padding-bottom: 1rem;
}
</style>