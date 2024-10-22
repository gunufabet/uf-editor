<template>
    <main-content :showLoading="showLoading" :main-title-text="mainSection?.title"
        :main-content-text="mainSection?.content"></main-content>

    <div style="padding-top: 2rem;"></div>

    <!-- section 1 -->
    <accordion-h2-style-1 v-if="section1H2?.design === '1'" style="margin-top: 1rem;" :section-title="section1H2?.title"
        :section-content="section1H2?.content" :h3-content-data="section1H3"
        :defaultOpenPanel="section1H2?.defaultOpen">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section1H2?.design === '2'" style="margin-top: 1rem;" :section-title="section1H2?.title"
        :section-content="section1H2?.content" :h3-content-data="section1H3"
        :defaultOpenPanel="section1H2?.defaultOpen">
    </accordion-h2-style-2>


    <!-- hot matches -->
    <sport-soccer-hot-match-section></sport-soccer-hot-match-section>

    <!-- livescore -->
    <aside-content style="margin-top: 2rem;" :key="asideTitleTextLiveMatch" :aside-title-text="asideTitleTextLiveMatch"
        :aside-content-text="asideContentTextLiveMatch"></aside-content>

    <!-- live score tab menu -->
    <div style="padding-top: 2rem;"></div>
    <sport-soccer-live-score-tab-menu></sport-soccer-live-score-tab-menu>

    <!-- menu 1 -->
    <div style="padding-top: 2rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="sectionWithMenu1"></tab-menu>
    <accordion-h2-style-1 v-if="selectedMenuContent?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenuContent?.titleH2" :section-content="selectedMenuContent?.contentH2"
        :section-content-2="selectedMenuContent?.content2H2" :h3-content-data="selectedMenuContent?.contentListH3"
        :sectionContentTableHeader="selectedMenuContent?.contentTable?.header"
        :sectionContentTableContent="selectedMenuContent?.contentTable?.content">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="selectedMenuContent?.design === '2'" style="margin-top: 1rem;"
        :section-title="selectedMenuContent?.titleH2" :section-content="selectedMenuContent?.contentH2"
        :section-content-2="selectedMenuContent?.content2H2" :h3-content-data="selectedMenuContent?.contentListH3"
        :sectionContentTableHeader="selectedMenuContent?.contentTable?.header"
        :sectionContentTableContent="selectedMenuContent?.contentTable?.content">
    </accordion-h2-style-2>

    <!-- menu 2 -->
    <div style="padding-top: 2rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu2" :tab-menu-list="sectionWithMenu2"></tab-menu>
    <accordion-h2-style-1 v-if="selectedMenu2Content?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenu2Content?.titleH2" :section-content="selectedMenu2Content?.contentH2"
        :section-content-2="selectedMenu2Content?.content2H2" :h3-content-data="selectedMenu2Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu2Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu2Content?.contentTable?.content">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="selectedMenu2Content?.design === '2'" style="margin-top: 1rem;"
        :section-title="selectedMenu2Content?.titleH2" :section-content="selectedMenu2Content?.contentH2"
        :section-content-2="selectedMenu2Content?.content2H2" :h3-content-data="selectedMenu2Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu2Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu2Content?.contentTable?.content">
    </accordion-h2-style-2>

    <!-- menu 3 -->
    <div style="padding-top: 2rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu3" :tab-menu-list="sectionWithMenu3"></tab-menu>
    <accordion-h2-style-1 v-if="selectedMenu3Content?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenu3Content?.titleH2" :section-content="selectedMenu3Content?.contentH2"
        :section-content-2="selectedMenu3Content?.content2H2" :h3-content-data="selectedMenu3Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu3Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu3Content?.contentTable?.content">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="selectedMenu3Content?.design === '2'" style="margin-top: 1rem;"
        :section-title="selectedMenu3Content?.titleH2" :section-content="selectedMenu3Content?.contentH2"
        :section-content-2="selectedMenu3Content?.content2H2" :h3-content-data="selectedMenu3Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu3Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu3Content?.contentTable?.content">
    </accordion-h2-style-2>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionSoccer, processSectionWithButton, processSectionWithButtonContent } from '@/composables/generalUtil'

const showLoading = ref(false);
const mainSection = ref();
const section1H2 = ref();
const section1H3 = ref();

/* menu 1 */
const sectionWithMenu1 = ref();
const sectionWithMenu1Content = ref();
const selectedMenuId = ref('');
const selectedMenuContent = ref();

/* menu 2 */
const sectionWithMenu2 = ref();
const sectionWithMenu2Content = ref();
const selectedMenu2Id = ref('');
const selectedMenu2Content = ref();

/* menu 3 */
const sectionWithMenu3 = ref();
const sectionWithMenu3Content = ref();
const selectedMenu3Id = ref('');
const selectedMenu3Content = ref();

const section2H2 = ref();
const section2H3 = ref();

const sectionBonusH2 = ref();
const sectionBonusH3 = ref();

onMounted(async () => {
    await getContent()
    selectTabMenu('');
    selectTabMenu2('');
    selectTabMenu3('');
})

async function getContent() {
    try {
        showLoading.value = true

        const response = await callApi.getSportHomeContent();
        if (response.succ) {
            const content = response?.data?.attributes
            mainSection.value = content?.MainSection;

            /* Section 1 */
            const section1 = content?.Section1


            /* Section 1 - H2 */
            section1H2.value = processSection(section1, ContentType.H2)[0];
            /* Section 2 - H3 */
            section1H3.value = processSection(section1, ContentType.H3);


            /* section 2 */
            const section2 = content?.Section2

            /* Section 2 - H2 */
            section2H2.value = processSectionSoccer(section2);
            /* Section 2 - H3 */
            section2H3.value = processSection(section2, ContentType.H3);            

            /* Section With Menu1 */
            sectionWithMenu1.value = processSectionWithMenu(content.SectionWithMenu1)

            /* Section With Menu1 - Content */
            const menuContentH2 = processSection(content.SectionWithMenu1Content, ContentType.H2);
            const menuContentH3 = processSection(content.SectionWithMenu1Content, ContentType.H3)

            sectionWithMenu1Content.value = processSectionWithMenuContent(menuContentH2, menuContentH3)


            /* Section With Menu2 */
            sectionWithMenu2.value = processSectionWithMenu(content.SectionWithMenu2)

            /* Section With Menu1 - Content */
            const menu2ContentH2 = processSection(content.SectionWithMenu2Content, ContentType.H2);
            const menu2ContentH3 = processSection(content.SectionWithMenu2Content, ContentType.H3)

            sectionWithMenu2Content.value = processSectionWithMenuContent(menu2ContentH2, menu2ContentH3)


            /* Section With Menu3 */
            sectionWithMenu3.value = processSectionWithMenu(content.SectionWithMenu3)

            /* Section With Menu1 - Content */
            const menu3ContentH2 = processSection(content.SectionWithMenu3Content, ContentType.H2);
            const menu3ContentH3 = processSection(content.SectionWithMenu3Content, ContentType.H3)

            sectionWithMenu2Content.value = processSectionWithMenuContent(menu3ContentH2, menu3ContentH3)

            // /* section 3 */
            // const section3 = content?.Section3

            // /* Section 3 - H2 */
            // section3H2.value = processSection(section3, ContentType.H2)[0];

            // /* Section 3 - H3 */
            // section3H3.value = processSection(section3, ContentType.H3);


            /* section bonus */
            // const sectionBonus = content?.SectionBonus

            // /* Section Bonus - H2 */
            // sectionBonusH2.value = processSection(sectionBonus);
            // /* Section Bonus - H3 */
            // sectionBonusH3.value = processSection(sectionBonus, ContentType.H3);

            // console.log('sectionBonusH2', sectionBonusH2.value)
            // console.log('sectionBonus', sectionBonus)
        }
    } catch (error) {

    }
    finally {
        showLoading.value = false
    }
}

function selectTabMenu(value: string) {
    if (!value) {
        value = sectionWithMenu1?.value[0]?.id;
        selectedMenuId.value = value;
    }

    const selectedMenu = sectionWithMenu1Content.value?.find(
        (content) => content.menuTabId === value
    );
    selectedMenuContent.value = selectedMenu;
}

function selectTabMenu2(value: string) {
    if (!value) {
        value = sectionWithMenu2?.value[0]?.id;
        selectedMenu2Id.value = value;
    }

    const selectedMenu = sectionWithMenu2Content.value?.find(
        (content) => content.menuTabId === value
    );
    selectedMenu2Content.value = selectedMenu;
}

function selectTabMenu3(value: string) {
    if (!value) {
        value = sectionWithMenu3?.value[0]?.id;
        selectedMenu3Id.value = value;
    }

    const selectedMenu = sectionWithMenu3Content.value?.find(
        (content) => content.menuTabId === value
    );
    selectedMenu3Content.value = selectedMenu;
}

// const content = ref(getContent());

/* main title */
// const mainTitleText = ref(content.value.Sport.Soccer.main.title);
// const mainContentText = ref(content.value.Sport.Soccer.main.content);
// const section1 = ref(content.value.Sport.Soccer.section1);
// const section2 = ref(content.value.Sport.Soccer.section2);

// const selectedMenuId = ref('');
// const selectedMenuContent = ref();
// const tabMenuList = ref(content.value.Sport.Soccer.sectionWithMenu1.menuTab);
// const tabMenuList2 = ref(content.value.Sport.Soccer.sectionWithMenu2.menuTab);

// const asideTitleText = ref('');
// const asideContentText = ref('');
// const asideContentShowBetBoost = ref(false);

const asideTitleTextLiveMatch = ref('UFABET Live Soccer Matches');
const asideContentTextLiveMatch = ref('The Ufabet Live Soccer Matches are listed on the table below.');

// function selectTabMenu(value: string) {
//     if (!value) {
//         value = content.value.Sport.Soccer.sectionWithMenu1.menuTab[0].id;
//         selectedMenuId.value = value;
//     }

//     const selectedMenu = content.value.Sport.Soccer.sectionWithMenu1.menuContent.find(
//         (content) => content.menuTabId === value
//     );

//     selectedMenuId.value = selectedMenu?.menuTabId || '';
//     selectedMenuContent.value = selectedMenu;
// }

// const selectTabMenu2_MenuTabId = ref('');
// const selectTabMenu2_FocusTitle = ref(false);

// function selectTabMenu2(value: string) {
//     if (!value) {
//         value = content.value.Sport.Soccer.sectionWithMenu2.menuTab[0].id;
//     }

//     const selectedMenu = content.value.Sport.Soccer.sectionWithMenu2.menuContent.find(
//         (content) => content.menuTabId === value
//     );

//     //"menuTabId": "football",
//     if (value === 'football') {
//         asideTitleText.value = selectedMenu?.title || '';
//         asideContentText.value = selectedMenu?.content || '';
//         asideContentShowBetBoost.value = selectedMenu?.showBetBoost || false;
//     }

//     selectTabMenu2_MenuTabId.value = selectedMenu?.menuTabId || '';
//     selectTabMenu2_FocusTitle.value = selectedMenu?.focusTitle || false;
// }

// onMounted(() => {
//     selectTabMenu('');
//     selectTabMenu2('');
// })
</script>

<style lang="scss" scoped>
.break-space {
    padding-bottom: 1rem;
}
</style>