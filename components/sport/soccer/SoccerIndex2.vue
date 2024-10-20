<template>
    <main-content :showLoading="showLoading" :main-title-text="mainSection?.title"
        :main-content-text="mainSection?.content"></main-content>

    <div style="padding-top: 2rem;"></div>

    <accordion-h2-style-2 v-if="!showLoading" :showLoading="showLoading" style="margin-top: 30px;"
        :section-title="section2H2?.title" :section-content="section2H2?.content"
        :league-id="section2H2?.soccerSetting?.leagueId" :defaultOpenPanel="section2H2?.defaultOpen"
        :showRunningByLeague="section2H2?.soccerSetting?.showRunningByLeague">
    </accordion-h2-style-2>

    <!-- sectionWithMenu1 -->
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="sectionWithMenu1" :h2Title="true">
    </tab-menu>

    <accordion-h2-style-1 v-if="selectedMenuContent?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenuContent?.titleH2" :section-content="selectedMenuContent?.contentH2"
        :h3-content-data="selectedMenuContent?.contentListH3">
    </accordion-h2-style-1>

    <accordion-h2-style-2 v-if="selectedMenuContent?.design === '2'" style="margin-top: 1rem;"
        :section-title="selectedMenuContent?.titleH2" :section-content="selectedMenuContent?.contentH2"
        :h3-content-data="selectedMenuContent?.contentListH3">
    </accordion-h2-style-2>

    <div style="padding-top: 2rem;"></div>

    <!-- section 3 -->
    <accordion-h2-style-1 v-if="section3H2?.design === '1'" style="margin-top: 1rem;" :section-title="section3H2?.title"
        :section-content="section3H2?.content" :h3-content-data="section3H3"
        :defaultOpenPanel="section3H2?.defaultOpen">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section3H2?.design === '2'" style="margin-top: 1rem;" :section-title="section3H2?.title"
        :section-content="section3H2?.content" :h3-content-data="section3H3"
        :defaultOpenPanel="section3H2?.defaultOpen">
    </accordion-h2-style-2>

    <div style="padding-top: 2rem;"></div>
    <!-- section 4 -->
    <accordion-h2-style-1 v-if="section4H2?.design === '1'" style="margin-top: 1rem;" :section-title="section4H2?.title"
        :section-content="section4H2?.content" :h3-content-data="section4H3" :defaultOpenPanel="section4H2?.defaultOpen"
        :showBetBoost="section4H2?.soccerSetting?.showBetBoost">
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section4H2?.design === '2'" style="margin-top: 1rem;" :section-title="section4H2?.title"
        :section-content="section4H2?.content" :h3-content-data="section4H3" :defaultOpenPanel="section4H2?.defaultOpen"
        :showBetBoost="section4H2?.soccerSetting?.showBetBoost">
    </accordion-h2-style-2>

    <div style="padding-top: 2rem;"></div>
    <!-- section 5 -->
    <accordion-h2-style-1 v-if="section5H2?.design === '1'" style="margin-top: 1rem;" :section-title="section5H2?.title"
        :section-content="section5H2?.content" :h3-content-data="section5H3" :defaultOpenPanel="section5H2?.defaultOpen"        >
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section5H2?.design === '2'" style="margin-top: 1rem;" :section-title="section5H2?.title"
        :section-content="section5H2?.content" :h3-content-data="section5H3"
        :defaultOpenPanel="section5H2?.defaultOpen">
    </accordion-h2-style-2>

    <div style="padding-top: 2rem;"></div>
    <!-- section 6 -->
    <accordion-h2-style-1 v-if="section6H2?.design === '1'" style="margin-top: 1rem;" :section-title="section6H2?.title"
        :section-content="section6H2?.content" :h3-content-data="section6H3" :defaultOpenPanel="section6H2?.defaultOpen"        >
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section6H2?.design === '2'" style="margin-top: 1rem;" :section-title="section6H2?.title"
        :section-content="section6H2?.content" :h3-content-data="section6H3"
        :defaultOpenPanel="section6H2?.defaultOpen">
    </accordion-h2-style-2>

    <div style="padding-top: 2rem;"></div>
    <!-- section 7 -->
    <accordion-h2-style-1 v-if="section7H2?.design === '1'" style="margin-top: 1rem;" :section-title="section7H2?.title"
        :section-content="section7H2?.content" :h3-content-data="section7H3" :defaultOpenPanel="section7H2?.defaultOpen"        >
    </accordion-h2-style-1>
    <accordion-h2-style-2 v-if="section7H2?.design === '2'" style="margin-top: 1rem;" :section-title="section7H2?.title"
        :section-content="section7H2?.content" :h3-content-data="section7H3"
        :defaultOpenPanel="section7H2?.defaultOpen">
    </accordion-h2-style-2>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionSoccer, processSectionWithButton, processSectionWithButtonContent } from '@/composables/generalUtil'

// const selectedMenuId = ref('football-betting');
const selectedMenuId = ref('');
const selectedMenuContent = ref();
const showLoading = ref(false);
const mainSection = ref();
const section2H2 = ref();
// const section2H3 = ref();
const sectionWithMenu1 = ref();
const sectionWithMenu1Content = ref();
const section3H2 = ref();
const section3H3 = ref();
const section4H2 = ref();
const section4H3 = ref();
const section5H2 = ref();
const section5H3 = ref();
const section6H2 = ref();
const section6H3 = ref();
const section7H2 = ref();
const section7H3 = ref();

function selectTabMenu(value: string) {
    if (!value) {
        value = sectionWithMenu1?.value[0]?.id;
        selectedMenuId.value = value;
    }

    const selectedMenu = sectionWithMenu1Content.value.find(
        (content) => content.menuTabId === value
    );

    selectedMenuContent.value = selectedMenu;
}

onMounted(async () => {
    await getContent()
    selectTabMenu('');
})

async function getContent() {
    try {
        showLoading.value = true

        const response = await callApi.getSoccerContent();
        if (response.succ) {
            const content = response?.data?.attributes
            mainSection.value = content?.MainSection;

            /* section 2 */
            const section2 = content?.Section2

            /* Section 2 - H2 */
            section2H2.value = processSectionSoccer(section2);
            /* Section 2 - H3 */
            // section2H3.value = processSection(section2, ContentType.H3);

            /* Section With Menu1 */
            sectionWithMenu1.value = processSectionWithMenu(content.SectionWithMenu1)

            /* Section With Menu1 - Content */
            const menuContentH2 = processSection(content.SectionWithMenu1Content, ContentType.H2);
            const menuContentH3 = processSection(content.SectionWithMenu1Content, ContentType.H3)

            sectionWithMenu1Content.value = processSectionWithMenuContent(menuContentH2, menuContentH3)

            /* section 3 */
            const section3 = content?.Section3

            /* Section 3 - H2 */
            section3H2.value = processSection(section3, ContentType.H2)[0];

            /* Section 3 - H3 */
            section3H3.value = processSection(section3, ContentType.H3);

            /* section 4 */
            const section4 = content?.Section4

            /* Section 4 - H2 */
            section4H2.value = processSection(section4, ContentType.H2)[0];
            
            /* Section 4 - H3 */
            section4H3.value = processSection(section4, ContentType.H3);

            /* section 5 */
            const section5 = content?.Section5

            /* section 5 - H2 */
            section5H2.value = processSection(section5, ContentType.H2)[0];
            
            /* section 5 - H3 */
            section5H3.value = processSection(section5, ContentType.H3);

            /* section 6 */
            const section6 = content?.Section6

            /* section 6 - H2 */
            section6H2.value = processSection(section6, ContentType.H2)[0];
            
            /* section 6 - H3 */
            section6H3.value = processSection(section6, ContentType.H3);

            /* section 7 */
            const section7 = content?.Section7

            /* section 7 - H2 */
            section7H2.value = processSection(section7, ContentType.H2)[0];
            
            /* section 7 - H3 */
            section7H3.value = processSection(section7, ContentType.H3);
        }
    } catch (error) {

    }
    finally {
        showLoading.value = false
    }
}
</script>