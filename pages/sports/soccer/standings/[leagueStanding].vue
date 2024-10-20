<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="mainSection?.title">
    </breadcrumb>

    <main-content :showLoading="showLoading" :main-title-text="mainSection?.title"
        :main-content-text="mainSection?.content"></main-content>

    <!-- standing table -->
    <accordion-h2-style-2 v-if="!showLoading" :showLoading="showLoading" style="margin-top: 30px;" :section-title="standingSection?.title"
        :section-content="standingSection?.content" :showLeagueTable="standingSection?.showLeagueTable"
        :league-id="leagueId" :league-id-cigapi="leagueId2" :defaultOpenPanel="true">
    </accordion-h2-style-2>

    <!-- section 2 -->
    <accordion-h2-style-1 v-if="section2H2?.design === '1'" style="margin-top: 1rem;" :section-title="section2H2?.title"
        :section-content="section2H2?.content" :h3-content-data="section2H3"
        :defaultOpenPanel="section2H2?.defaultOpen">
    </accordion-h2-style-1>

    <!-- section 3 -->
    <accordion-h2-style-1 v-if="section3H2?.design === '1'" style="margin-top: 1rem;" :section-title="section3H2?.title"
        :section-content="section3H2?.content" :h3-content-data="section3H3"
        :defaultOpenPanel="section3H2?.defaultOpen">
    </accordion-h2-style-1>

    <!-- section 4 -->
    <accordion-h2-style-1 v-if="section4H2?.design === '1'" style="margin-top: 1rem;" :section-title="section4H2?.title"
        :section-content="section4H2?.content" :h3-content-data="section4H3"
        :defaultOpenPanel="section3H2?.defaultOpen">
    </accordion-h2-style-1>

    <!-- section 5 -->
    <accordion-h2-style-1 v-if="section5H2?.design === '1'" style="margin-top: 1rem;" :section-title="section5H2?.title"
        :section-content="section5H2?.content" :h3-content-data="section5H3"
        :defaultOpenPanel="section3H2?.defaultOpen">
    </accordion-h2-style-1>    
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionWithMenu, processSectionWithMenuContent } from '@/composables/generalUtil'

const showLoading = ref(false);
const standingSection = ref();
const mainSection = ref();
const section2H2 = ref();
const section2H3 = ref();

const section3H2 = ref();
const section3H3 = ref();

const section4H2 = ref();
const section4H3 = ref();

const section5H2 = ref();
const section5H3 = ref();

async function getLeagueStandingContent() {
    try {
        showLoading.value = true

        const response = await callApi.getLeagueStandingContentById(route.query.leagueId);
        if (response.succ) {
            const leagueContent = response?.data[0]?.attributes

            mainSection.value = leagueContent?.MainSection;


            standingSection.value = {
                title: leagueContent.leagueTableTitle,
                content: leagueContent.leagueTableContent,
                showLeagueTable: leagueContent.showLeagueTable,
                showRunningMatch: leagueContent.showRunningMatch,
            }

            const section2 = leagueContent?.Section2
            /* section 2 */
            /* Section 2 - H2 */
            section2H2.value = processSection(section2, ContentType.H2)[0];
            /* Section 2 - H3 */
            section2H3.value = processSection(section2, ContentType.H3);

            const section3 = leagueContent?.Section3
            /* section 3 */
            /* Section 3 - H2 */
            section3H2.value = processSection(section3, ContentType.H2)[0];
            /* Section 2 - H3 */
            section3H3.value = processSection(section3, ContentType.H3);

            const section4 = leagueContent?.Section4
            /* section 4 */
            /* Section 4 - H2 */
            section4H2.value = processSection(section4, ContentType.H2)[0];
            /* Section 4 - H3 */
            section4H3.value = processSection(section4, ContentType.H3);

            const section5 = leagueContent?.Section5
            /* section 4 */
            /* Section 4 - H2 */
            section5H2.value = processSection(section5, ContentType.H2)[0];
            /* Section 4 - H3 */
            section5H3.value = processSection(section5, ContentType.H3);
        }
    } catch (error) {

    }
    finally {
        showLoading.value = false
    }
}

const route = useRoute()
const leagueId = ref(route.query.leagueId);

onMounted(async () => {
    document.addEventListener("scroll", scrollFunction);
    getLeagueStandingContent()
})

function scrollFunction() {
    const scrollupBtn = document.getElementById("scrollupBtn");
    if (scrollupBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollupBtn.style.display = "block";
        } else {
            scrollupBtn.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>