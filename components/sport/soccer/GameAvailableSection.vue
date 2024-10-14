<template>
    <accordion-h2 :section-title="asideTitleText" :section-content="asideContentText"></accordion-h2>

    <table-summary :tableHeader="title_contentH2Table.header"
        :tableContent="title_contentH2Table.content"></table-summary>

    <br>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <br>

    <div :id="item.titleId" v-for="(item, index) in title_contentH3Expand" :key="index">
        <accordion-h3 :section-title="item.title" :section-content="item.content" :with-break-line="true"
            :defaultOpenPanel="item.defaultOpen">
        </accordion-h3>

        <br v-if="item.buttonList?.length > 0">
        <div v-if="item.buttonDesign === '1' && item.buttonList?.length > 0" class="btn-wrapper"
            style="margin-left: 2rem;">
            <custom-button-5 v-for="(game, index) in item.buttonList" :key="index" :id="game.id" :label="game.text"
                :label2="game.text2"></custom-button-5>
        </div>
        <div v-if="item.buttonDesign === '2' && item.buttonList?.length > 0" class="btn-wrapper"
            style="margin-left: 2rem;">
            <custom-button-6 v-for="(game, index) in item.buttonList" :key="index" :id="game.id"
                :label="game.text"></custom-button-6>
        </div>
        <br v-if="item.buttonList?.length > 0">
    </div>

    <aside-content :id="asideTitleIdText2" :key="asideTitleText2" :aside-title-text="asideTitleText2"
        :aside-content-text="asideContentText2"></aside-content>
    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in title2_contentH4Expand" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <br>
    <aside-content :key="asideTitleText3" :aside-title-text="asideTitleText3"
        :aside-content-text="asideContentText3"></aside-content>
    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in title3_contentH4Expand" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>
</template>

<script setup lang="ts">
import content from '~/assets/script/content.json'

const props = defineProps({
    focusTitle: {
        type: Boolean,
        default: false
    },
    menuTabId: {
        type: String,
        default: ''
    }
});

watch(() => props.menuTabId, (newValue) => {
    selectTabMenu(newValue);
    const element = document.getElementById(props.menuTabId);    
    if (element) {
        element.focus({ preventScroll: true }); // Focus the element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
});

const gameSection = ref(content.Sport.Soccer.sectionGameAvailable);
const asideTitleText = ref(gameSection.value.title);
const asideContentText = ref(gameSection.value.content);
const asideTitleText2 = ref(gameSection.value.title2);
const asideTitleIdText2 = ref(gameSection.value.title2Id);
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