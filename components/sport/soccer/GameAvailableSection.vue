<template>
    <aside-content :key="asideTitleText" :aside-title-text="asideTitleText" :aside-content-text="asideContentText"></aside-content>
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

const tabMenuList = ref(gameSection.value.menuTab);
const asideTitleText_SelectedTab = ref('');
const asideContentText_SelectedTab = ref('');
const gameListButton_SelectedTab = ref([]);
const buttonDesign_SelectedTab = ref('1');

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