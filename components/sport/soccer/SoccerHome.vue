<template>
    <main-content :main-title-text="mainTitleText" :main-content-text="mainContentText"></main-content>
    <div class="break-space"></div>

    <sport-banner></sport-banner>
    <div class="break-space"></div>

    <sub-main-content :section-title="sectionTitle" :section-content="sectionContent"
        :section-sub-content="subContentData"></sub-main-content>

    <!-- hot matches -->
    <sport-soccer-hot-match-section></sport-soccer-hot-match-section>

    <!-- livescore -->
    <aside-content :aside-title-text="asideTitleTextLiveMatch"
        :aside-content-text="asideContentTextLiveMatch"></aside-content>
    <sport-soccer-live-score-tab-menu></sport-soccer-live-score-tab-menu>
    <div class="break-space"></div>

    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <div class="break-space"></div>

    <sub-main-content :section-title="sectionTitleTabMenuSelected" :section-content="sectionContentTabMenuSelected"
        :section-sub-content="subContentDataTabMenuSelected" :section-title-h3="sectionTitleTabMenuSelectedH3"
        :section-content-h3="sectionContentTabMenuSelectedH3" :section-sub-content-h3="subContentDataTabMenuSelectedH3"
        :section-title-h4="sectionTitleTabMenuSelectedH4" :section-content-h4="sectionContentTabMenuSelectedH4"
        :section-sub-content-h4="subContentDataTabMenuSelectedH4"></sub-main-content>

    <tab-menu @select-tab-menu="selectTabMenu2" :tab-menu-list="tabMenuList2"></tab-menu>
    <aside-content :aside-title-text="asideTitleText" :aside-content-text="asideContentText"></aside-content>

    <sport-soccer-bet-boost v-if="asideContentShowBetBoost"></sport-soccer-bet-boost>

    <sport-soccer-news-section></sport-soccer-news-section>

    <sport-soccer-bonus-section></sport-soccer-bonus-section>

    <sport-soccer-game-available-section></sport-soccer-game-available-section>
</template>

<script setup lang="ts">
import type { SportSubContent } from "~/types/strapi-model";
import content from '~/assets/script/content.json'

/* main title */
const mainTitleText = ref(content.Sport.Soccer.main.title);
const mainContentText = ref(content.Sport.Soccer.main.content);

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

function selectTabMenu(value: string) {
    if (!value) {
        value = content.Sport.Soccer.sectionWithMenu1.menuTab[0].id;
    }

    const selectedMenu = content.Sport.Soccer.sectionWithMenu1.menuContent.find(
        (content) => content.menuTabId === value
    );

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
}

function selectTabMenu2(value: string) {
    if (!value) {
        value = content.Sport.Soccer.sectionWithMenu2.menuTab[0].id;
    }

    const selectedMenu = content.Sport.Soccer.sectionWithMenu2.menuContent.find(
        (content) => content.menuTabId === value
    );

    asideTitleText.value = selectedMenu?.title || '';
    asideContentText.value = selectedMenu?.content || '';
    asideContentShowBetBoost.value = selectedMenu?.showBetBoost || false;
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