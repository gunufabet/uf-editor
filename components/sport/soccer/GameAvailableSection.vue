<template>
    <aside-content :key="asideTitleText" :aside-title-text="asideTitleText"
        :aside-content-text="asideContentText"></aside-content>

    <table-summary :tableHeader="title_contentH2Table.header"
        :tableContent="title_contentH2Table.content"></table-summary>

    <accordion-h3 v-for="(item, index) in title_contentH3Expand" :key="index" :section-title="item.title"
        :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <aside-content :key="asideTitleText2" :aside-title-text="asideTitleText2"
        :aside-content-text="asideContentText2"></aside-content>
    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in title2_contentH4Expand" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <aside-content :key="asideTitleText3" :aside-title-text="asideTitleText3"
        :aside-content-text="asideContentText3"></aside-content>
    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in title3_contentH4Expand" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <br>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <div class="break-space"></div>
    <aside-content :key="asideTitleText_SelectedTab" :aside-title-text="asideTitleText_SelectedTab"
        :aside-content-text="asideContentText_SelectedTab"></aside-content>

    <div class="btn-wrapper">
        <custom-button-5 v-if="buttonDesign_SelectedTab === '1'" v-for="(game, index) in gameListButton_SelectedTab"
            :key="index" :id="game.id" :label="game.text" :label2="game.text2"></custom-button-5>

        <custom-button-6 v-if="buttonDesign_SelectedTab === '2'" v-for="(game, index) in gameListButton_SelectedTab"
            :key="index" :id="game.id" :label="game.text"></custom-button-6>
    </div>
</template>

<script setup lang="ts">
import content from '~/assets/script/content.json'

const gameSection = ref(content.Sport.Soccer.sectionGameAvailable);
const asideTitleText = ref(gameSection.value.title);
const asideContentText = ref(gameSection.value.content);
const asideTitleText2 = ref(gameSection.value.title2);
const asideContentText2 = ref(gameSection.value.content2);
const asideTitleText3 = ref(gameSection.value.title3);
const asideContentText3 = ref(gameSection.value.content3);

const tabMenuList = ref(gameSection.value.menuTab);
const asideTitleText_SelectedTab = ref('');
const asideContentText_SelectedTab = ref('');
const gameListButton_SelectedTab = ref([]);
const buttonDesign_SelectedTab = ref('1');
const title_contentH2Table = ref(content.Sport.Soccer.sectionGameAvailable.title_contentH2Table)
const title_contentH3Expand = ref(content.Sport.Soccer.sectionGameAvailable.title_contentH3Expand)
const title2_contentH4Expand = ref(content.Sport.Soccer.sectionGameAvailable.title2_contentH4Expand)
const title3_contentH4Expand = ref(content.Sport.Soccer.sectionGameAvailable.title3_contentH4Expand)

function selectTabMenu(value: string) {
    if (!value) {
        value = gameSection.value.menuTab[0].id;
    }

    const selectedMenu = gameSection.value.menuContent.find(
        (content) => content.menuTabId === value
    );

    asideTitleText_SelectedTab.value = selectedMenu?.title || '';
    asideContentText_SelectedTab.value = selectedMenu?.content || '';
    buttonDesign_SelectedTab.value = selectedMenu?.buttonDesign || '';
    gameListButton_SelectedTab.value = selectedMenu?.buttonList || [];
}

onMounted(() => {
    selectTabMenu('');
})
</script>

<style lang="scss" scoped>
.btn-wrapper {
    display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 1rem;
    gap: 0.5rem;
    margin: 0 0 0 1rem;
    flex-wrap: wrap;
}
</style>