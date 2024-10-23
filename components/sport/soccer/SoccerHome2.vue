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
    <div style="padding-top: 3rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu2" :tab-menu-list="sectionWithMenu2"></tab-menu>
    <accordion-h2-style-1 v-if="selectedMenu2Content?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenu2Content?.titleH2" :section-content="selectedMenu2Content?.contentH2"
        :section-content-2="selectedMenu2Content?.content2H2" :h3-content-data="selectedMenu2Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu2Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu2Content?.contentTable?.content"
        :showBetBoost="selectedMenu2Content?.soccerSetting?.showBetBoost"
        :showNewsSection="selectedMenu2Content?.soccerSetting?.showNews">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="selectedMenu2Content?.design === '2'" style="margin-top: 1rem;"
        :section-title="selectedMenu2Content?.titleH2" :section-content="selectedMenu2Content?.contentH2"
        :section-content-2="selectedMenu2Content?.content2H2" :h3-content-data="selectedMenu2Content?.contentListH3"
        :sectionContentTableHeader="selectedMenu2Content?.contentTable?.header"
        :sectionContentTableContent="selectedMenu2Content?.contentTable?.content"
        :showBetBoost="selectedMenu2Content?.soccerSetting?.showBetBoost"
        :showNewsSection="selectedMenu2Content?.soccerSetting?.showNews">
    </accordion-h2-style-2>

    <!-- bonus section -->
    <div style="padding-top: 2rem;"></div>
    <sport-soccer-bonus-section :title="sectionBonusH2?.title" :content="sectionBonusH2?.content"
        :imgList="sectionBonusH2?.imgList" :useCms="true"></sport-soccer-bonus-section>

    <!-- SectionGameAvailable -->
    <div style="padding-top: 2rem;"></div>
    <accordion-h2-style-1 v-if="sectionGameAvailableH2?.design === '1'" style="margin-top: 1rem;"
        :section-title="sectionGameAvailableH2?.title" :section-content="sectionGameAvailableH2?.content"
        :section-content-2="sectionGameAvailableH2?.content2" :h3-content-data="section2H3"
        :defaultOpenPanel="sectionGameAvailableH2?.defaultOpen" :h4-content-data="sectionGameAvailableH2?.contentListH4"
        :sectionContentTableHeader="sectionGameAvailableH2?.contentTable?.header"
        :sectionContentTableContent="sectionGameAvailableH2?.contentTable?.content">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="sectionGameAvailableH2?.design === '2'" style="margin-top: 1rem;"
        :section-title="sectionGameAvailableH2?.title" :section-content="sectionGameAvailableH2?.content"
        :section-content-2="sectionGameAvailableH2?.content2" :h3-content-data="section2H3"
        :defaultOpenPanel="sectionGameAvailableH2?.defaultOpen" :h4-content-data="sectionGameAvailableH2?.contentListH4"
        :sectionContentTableHeader="sectionGameAvailableH2?.contentTable?.header"
        :sectionContentTableContent="sectionGameAvailableH2?.contentTable?.content">
    </accordion-h2-style-2>

    <!-- menu 3 -->
    <div style="padding-top: 3rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu3" :tab-menu-list="sectionWithMenu3"></tab-menu>
    <div style="padding-top: 2rem;"></div>
    <accordion-h3 :id="item.titleId" v-for="(item, index) in selectedMenu3Content?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="item.designWithUnderline"
        :defaultOpenPanel="item.defaultOpen" :img-list="item.imgList">
    </accordion-h3>

    <!-- section 2 -->
    <div style="padding-top: 2rem;"></div>
    <accordion-h2-style-1 v-if="section2H2?.design === '1'" style="margin-top: 1rem;" :section-title="section2H2?.title"
        :section-content="section2H2?.content" :h3-content-data="section2H3" :defaultOpenPanel="section2H2?.defaultOpen"
        :h4-content-data="section2H2?.contentListH4">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section2H2?.design === '2'" style="margin-top: 1rem;" :section-title="section2H2?.title"
        :section-content="section2H2?.content" :h3-content-data="section2H3" :defaultOpenPanel="section2H2?.defaultOpen"
        :h4-content-data="section2H2?.contentListH4">
    </accordion-h2-style-2>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionSoccer, processSectionBonus, processSectionWithButton, processSectionWithButtonContent } from '@/composables/generalUtil'

const showLoading = ref(false);
const mainSection = ref();
const section1H2 = ref();
const section1H3 = ref();

/* menu 1 */
const sectionWithMenu1 = ref();
const sectionWithMenu1Content = ref();
const selectedMenuContent = ref();

/* menu 2 */
const sectionWithMenu2 = ref();
const sectionWithMenu2Content = ref();
const selectedMenu2Content = ref();

/* menu 3 */
const sectionWithMenu3 = ref();
const sectionWithMenu3Content = ref();
const selectedMenu3Content = ref();

const section2H2 = ref();
const section2H3 = ref();

const sectionGameAvailableH2 = ref();

const sectionBonusH2 = ref();

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

            section1(content)
            section2(content)
            sectionGameAvailable(content)

            section1WithMenu1(content)
            section1WithMenu2(content)
            section1WithMenu3(content)
            sectionBonus(content)
        }
    } catch (error) {

    }
    finally {
        showLoading.value = false
    }
}

function section1(content) {
    try {
        /* Section 1 */
        const section1 = content?.Section1

        /* Section 1 - H2 */
        section1H2.value = processSection(section1, ContentType.H2)[0];
        /* Section 2 - H3 */
        section1H3.value = processSection(section1, ContentType.H3);
    } catch (error) {

    }
}

function section2(content) {
    try {
        /* section 2 */
        const section2 = content?.Section2

        // /* Section 2 - H2 */
        section2H2.value = processSectionH2H4(section2);
    } catch (error) {

    }
}

function sectionGameAvailable(content) {
    try {
        /* section 2 */
        const section = content?.SectionGameAvailable

        // /* Section 2 - H2 */
        sectionGameAvailableH2.value = processSection(section, ContentType.H2)[0];
    } catch (error) {

    }
}

function sectionBonus(content) {
    try {
        /* section bonus */
        const sectionBonus = content?.SectionBonus

        // /* Section Bonus - H2 */
        sectionBonusH2.value = processSectionBonus(sectionBonus);
    } catch (error) {

    }
}

function section1WithMenu1(content) {
    try {
        /* Section With Menu1 */
        sectionWithMenu1.value = processSectionWithMenu(content.SectionWithMenu1)

        /* Section With Menu1 - Content */
        const menuContentH2 = processSection(content.SectionWithMenu1Content, ContentType.H2);
        const menuContentH3 = processSection(content.SectionWithMenu1Content, ContentType.H3)

        sectionWithMenu1Content.value = processSectionWithMenuContent(menuContentH2, menuContentH3)
    } catch (error) {

    }
}

function section1WithMenu2(content) {
    /* Section With Menu2 */
    sectionWithMenu2.value = processSectionWithMenu(content.SectionWithMenu2)

    /* Section With Menu1 - Content */
    const menu2ContentH2 = processSection(content.SectionWithMenu2Content, ContentType.H2);
    const menu2ContentH3 = processSection(content.SectionWithMenu2Content, ContentType.H3)

    sectionWithMenu2Content.value = processSectionWithMenuContent(menu2ContentH2, menu2ContentH3)
}

function section1WithMenu3(content) {
    /* Section With Menu3 */
    sectionWithMenu3.value = processSectionWithMenu(content.SectionWithMenu3)

    /* Section With Menu1 - Content */
    const menu3ContentH2 = processSection(content.SectionWithMenu3Content, ContentType.H2);
    const menu3ContentH3 = processSection(content.SectionWithMenu3Content, ContentType.H3)

    sectionWithMenu3Content.value = processSectionWithMenuContent(menu3ContentH2, menu3ContentH3)
}

function selectTabMenu(value: string) {
    if (!value) {
        value = sectionWithMenu1?.value[0]?.id;
    }

    const selectedMenuObj = sectionWithMenu1.value?.find(
        (content) => content.id === value
    );

    const selectedMenu = sectionWithMenu1Content.value?.find(
        (content) => content.menuTabId === value
    );

    if (selectedMenuObj?.focusTab?.focusTitle) {
        const element = document.getElementById(selectedMenuObj?.focusTab?.focusTitleElementId);
        if (element) {
            element.focus({ preventScroll: true }); // Focus the element
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    } else {
        selectedMenuContent.value = selectedMenu;
    }
}

function selectTabMenu2(value: string) {
    if (!value) {
        value = sectionWithMenu2?.value[0]?.id;
    }

    const selectedMenuObj = sectionWithMenu2.value?.find(
        (content) => content.id === value
    );

    const selectedMenu = sectionWithMenu2Content.value?.find(
        (content) => content.menuTabId === value
    );

    if (selectedMenuObj?.focusTab?.focusTitle) {
        const element = document.getElementById(selectedMenuObj?.focusTab?.focusTitleElementId);
        if (element) {
            element.focus({ preventScroll: true }); // Focus the element
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    } else {
        selectedMenu2Content.value = selectedMenu;
    }
}

function selectTabMenu3(value: string) {
    if (!value) {
        value = sectionWithMenu3?.value[0]?.id;
    }

    const selectedMenuObj = sectionWithMenu3.value?.find(
        (content) => content.id === value
    );

    const selectedMenu = sectionWithMenu3Content.value?.find(
        (content) => content.menuTabId === value
    );

    if (selectedMenuObj?.focusTab?.focusTitle) {
        const element = document.getElementById(selectedMenuObj?.focusTab?.focusTitleElementId);
        if (element) {
            element.focus({ preventScroll: true }); // Focus the element
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    } else {
        selectedMenu3Content.value = selectedMenu;
    }
}
const asideTitleTextLiveMatch = ref('UFABET Live Soccer Matches');
const asideContentTextLiveMatch = ref('The Ufabet Live Soccer Matches are listed on the table below.');
</script>

<style lang="scss" scoped>
.break-space {
    padding-bottom: 1rem;
}
</style>