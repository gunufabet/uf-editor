<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="mainSection?.title">
    </breadcrumb>

    <main-content :main-title-text="mainSection?.title" :main-content-text="mainSection?.content"></main-content>

    <div style="padding-top: 2rem;"></div>

    <sport-soccer-league-match-CIGAPI :league-id="leagueId"
        :league-id-cigapi="leagueId2"></sport-soccer-league-match-CIGAPI>

    <div style="padding-top: 2rem;"></div>

    <!-- section 2 -->
    <accordion-h2-style-1 v-if="section1H2?.design === '1'" style="margin-top: 1rem;" :section-title="section1H2?.title"
        :section-content="section1H2?.content" :h3-content-data="section1H3">
    </accordion-h2-style-1>

    <div style="padding-top: 3rem;"></div>

    <!-- sectionWithMenu1 -->
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="sectionWithMenu1" :h2Title="true">
    </tab-menu>

    <accordion-h2-style-1 v-if="selectedMenuContent?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedMenuContent?.titleH2" :section-content="selectedMenuContent?.contentH2"
        :h3-content-data="selectedMenuContent?.contentListH3">
    </accordion-h2-style-1>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionWithMenu, processSectionWithMenuContent } from '@/composables/generalUtil'

const { locale } = useI18n()

const mainSection = ref();
const section1H2 = ref();
const section1H3 = ref();
const sectionWithMenu1 = ref();
const sectionWithMenu1Content = ref();

async function getLeagueContent() {
    const response = await callApi.getLeagueContentById(route.query.leagueId);
    if (response.succ) {
        const leagueContent = response?.data[0]?.attributes

        mainSection.value = leagueContent?.MainSection;
        const section1 = leagueContent?.Section1

        /* section 1 */
        /* Section 1 - H2 */
        section1H2.value = processSection(section1, ContentType.H2)[0];
        /* Section 1 - H3 */
        section1H3.value = processSection(section1, ContentType.H3);

        /* Section With Menu1 */
        sectionWithMenu1.value = processSectionWithMenu(leagueContent.SectionWithMenu1)

        /* Section With Menu1 - Content */
        const menuContentH2 = processSection(leagueContent.SectionWithMenu1Content, ContentType.H2);
        const menuContentH3 = processSection(leagueContent.SectionWithMenu1Content, ContentType.H3)

        sectionWithMenu1Content.value = processSectionWithMenuContent(menuContentH2, menuContentH3)
    }
}

const route = useRoute()
const leagueId = ref(route.query.leagueId);
const leagueId2 = ref(route.query.leagueId2);
const selectedMenuId = ref('');
const selectedMenuContent = ref();

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
    document.addEventListener("scroll", scrollFunction);
    defaultSetup()
})

async function defaultSetup() {
    await getLeagueContent();
    selectTabMenu('');
}

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