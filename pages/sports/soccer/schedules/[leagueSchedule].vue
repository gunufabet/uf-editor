<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="mainSection?.title">
    </breadcrumb>

    <main-content :showLoading="showLoading" :main-title-text="mainSection?.title"
        :main-content-text="mainSection?.content"></main-content>

    <div style="padding-top: 2rem;"></div>

    <!-- fixtures table -->
    <accordion-h2-style-1 v-if="!showLoading" :showLoading="showLoading" style="margin-top: 30px;"
        :section-title="fixtureSection?.title" :section-content="fixtureSection?.content" :league-id="leagueId"
        :league-id-cigapi="leagueId2" :defaultOpenPanel="true" :showFixture="fixtureSection?.showFixture">
    </accordion-h2-style-1>

    <div style="padding-top: 2rem;"></div>

    <!-- section 2 -->
    <accordion-h2-style-1 v-if="section1H2?.design === '1'" style="margin-top: 1rem;" :section-title="section1H2?.title"
        :section-content="section1H2?.content" :h3-content-data="section1H3">
    </accordion-h2-style-1>

    <div style="padding-top: 2rem;"></div>

    <div class="btn-wrapper" style="justify-content: center; gap: 1rem;">
        <custom-button-3 class="btn-style" v-for="(button, index) in sectionWithButton1" :key="index"
            :label="button.text" :id="button.id" :isSelected="button.id === selectedBtnId"
            @click="selectButton(button)"></custom-button-3>
    </div>
    
    <div style="padding-top: 2rem;"></div>

    <accordion-h2-style-1 v-if="selectedButtonContent?.design === '1'" style="margin-top: 1rem;"
        :section-title="selectedButtonContent?.titleH2"
        :section-content="selectedButtonContent?.contentH2"
        :h3-content-data="selectedButtonContent?.contentListH3">
    </accordion-h2-style-1>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { ContentType } from "~/enums/api-schema-type";
import { processSection, processSectionWithButton, processSectionWithButtonContent } from '@/composables/generalUtil'

const { locale } = useI18n()

const route = useRoute()
const leagueId = ref(route.query.leagueId);
const selectedButtonContent = ref(null);
const selectedBtnId = ref();
const fixtureSection = ref();

const showLoading = ref(false);
const mainSection = ref();
const section1H2 = ref();
const section1H3 = ref();
const sectionWithButton1 = ref();
const sectionWithMenuButton1Content = ref();

async function getLeagueScheduleContent() {
    try {
        showLoading.value = true

        const response = await callApi.getLeagueScheduleContentById(route.query.leagueId);
        if (response.succ) {
            const leagueContent = response?.data[0]?.attributes

            fixtureSection.value = {
                title: leagueContent.fixtureTitle,
                content: leagueContent.fixtureContent,
                showFixture: leagueContent.showFixture
            }

            mainSection.value = leagueContent?.MainSection;
            const section2 = leagueContent?.Section2

            /* section 1 */
            /* Section 1 - H2 */
            section1H2.value = processSection(section2, ContentType.H2)[0];
            /* Section 1 - H3 */
            section1H3.value = processSection(section2, ContentType.H3);

            /* Section With Menu1 */
            sectionWithButton1.value = processSectionWithButton(leagueContent.SectionWithMenuButton1)

            /* Section With Menu1 - Content */
            const menuContentH2 = processSection(leagueContent.SectionWithMenuButton1Content, ContentType.H2);
            const menuContentH3 = processSection(leagueContent.SectionWithMenuButton1Content, ContentType.H3)

            sectionWithMenuButton1Content.value = processSectionWithButtonContent(menuContentH2, menuContentH3)
        }
    } catch (error) {

    }
    finally {
        showLoading.value = false
    }
}
onMounted(async () => {
    document.addEventListener("scroll", scrollFunction);
    await getLeagueScheduleContent()
    selectButton(null)
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

function selectButton(value: any) {    
    if (!value) {
        value = sectionWithButton1?.value[0].id;
        selectedBtnId.value = value;
    }
    else {
        selectedBtnId.value = value.id;
    }

    selectedButtonContent.value = sectionWithMenuButton1Content.value.find(
        (content) => content.buttonId === selectedBtnId.value
    );
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 1rem;
    gap: 0.5rem;
    margin: 0 1rem 0 1rem;
}

.btn-style {
    min-height: 44px;
}

@media only screen and (max-width:475px) {
    .btn-wrapper {
        justify-content: start;
    }

    .btn-style {
        height: 96px;
    }
}
</style>