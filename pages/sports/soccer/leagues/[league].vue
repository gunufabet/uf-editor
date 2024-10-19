<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="mainTitle">
    </breadcrumb>

    <main-content :main-title-text="mainSection?.title" :main-content-text="mainSection?.content"></main-content>

    <div style="padding-top: 2rem;"></div>

    <sport-soccer-league-match-CIGAPI :league-id="leagueId"
        :league-id-cigapi="leagueId2"></sport-soccer-league-match-CIGAPI>

    <div style="padding-top: 2rem;"></div>

    <!-- section 2 - API -->
    <accordion-h2-style-1 v-if="section1H2?.design === '1'" style="margin-top: 1rem;" :section-title="section1H2?.title"
        :section-content="section1H2?.content" :h3-content-data="section1H3">
    </accordion-h2-style-1>

    <div style="padding-top: 3rem;"></div>
    
    <!-- sectionWithMenu1 -->
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="content?.sectionWithMenu1.menuTab"
        :h2Title="true"></tab-menu>

    <accordion-h2 :section-title="selectedMenuContent?.section1?.titleH2"
        :section-content="selectedMenuContent?.section1?.contentH2">
    </accordion-h2>

    <br><br>

    <div v-for="(item, index) in selectedMenuContent?.section1?.contentListH3" :key="index">
        <accordion-h3 style="margin-left: 1rem;" :section-title="item.title" :section-content="item.content"
            :with-break-line="true">
        </accordion-h3>

        <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(itemH4, indexH4) in item?.contentListH4" :key="indexH4"
            :section-title="itemH4.title" :section-content="itemH4.content">
        </accordion-h4-style-2>
    </div>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { LanguageType } from "~/enums/lang-code";
import { ContentType } from "~/enums/api-schema-type";
import { useDateFormat } from "@vueuse/shared";
import source from '~/assets/script/contentLeague.json'
import sourceTH from '~/assets/script/th/contentLeague.json'

const contentSource = ref();
const { locale } = useI18n()

const mainSection = ref();
const section1 = ref();
const section1H2 = ref();
const section1H3 = ref();

async function getLeagueContent() {
    const response = await callApi.getLeagueContentById(route.query.leagueId);
    if (response.succ) {
        const leagueContent = response.data[0].attributes

        mainSection.value = leagueContent?.MainSection;
        section1.value = leagueContent?.Section1

        /* section 1 */

        /* H2 */
        section1H2.value = section1.value.find(
            (item) => item.__component === ContentType.H2
        );

        const h2Data = {
            title: section1H2.value.title,
            content: section1H2.value.content,
            defaultOpen: section1H2.value.defaultOpen,
            menuId: section1H2.value.menuId,
            design: section1H2.value?.deisgn?.data?.attributes?.design || '1'
        }

        section1H2.value = h2Data

        /* H3 */
        const section1H3Filter = section1.value.filter(
            (item) => item.__component === ContentType.H3
        );

        section1H3.value = [];

        section1H3Filter.forEach((item) => {
            let h4List = [];
            item?.contentListH4?.forEach((itemh4) => {
                const h4Data = {
                    title: itemh4?.title,
                    content: itemh4?.content,
                    defaultOpen: itemh4?.defaultOpen,
                    design: itemh4?.deisgn?.data?.attributes?.design,
                }

                h4List.push(h4Data);                
            })

            const h3Data = {
                title: item.title,
                content: item.content,
                defaultOpen: item.defaultOpen,
                menuId: item.menuId,
                design: item?.deisgn?.data?.attributes?.design,
                contentListH4: h4List
            }

            section1H3.value.push(h3Data);
        })
    }
}

if (locale.value === LanguageType.THAILAND) {
    contentSource.value = sourceTH;
} else {
    contentSource.value = source;
}

const route = useRoute()
const leagueId = ref(route.query.leagueId);
const leagueId2 = ref(route.query.leagueId2);
const selectedMenuId = ref('');
const selectedMenuContent = ref();

const content = computed(() => {
    const getContent = contentSource.value.leagueInfo.find(
        (item) => item.leagueId === leagueId.value
    );
    return getContent;
})

const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {
    }).value.replace('"', "");

const getThisYear = computed(() => {
    let todayDate = new Date();
    return dateFormat(todayDate, "YYYY");
})

const getNextYear = computed(() => {
    let nextYearDate = new Date();
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
    return dateFormat(nextYearDate, "YYYY");
})

const mainTitle = computed(() => {
    let title = content.value.main.title;
    title = title.replace(/\{premier_league_param\}/g, content.value.leagueName)
    title = title.replace('{premier_league_year_param}', getThisYear.value)

    return title;
})

const section2Title = computed(() => {
    let title = content.value.section2.title;
    title = title.replace('{premier_league_param}', content.value.leagueName)
    title = title.replace('{premier_league_year_from_param}', getThisYear.value);
    title = title.replace('{premier_league_year_to_param}', getNextYear.value);

    return title;
})

function selectTabMenu(value: string) {
    if (!value) {
        value = content.value?.sectionWithMenu1.menuTab[0].id;
        selectedMenuId.value = value;
    }

    const selectedMenu = content.value?.sectionWithMenu1.menuContent.find(
        (content) => content.menuTabId === value
    );

    selectedMenuContent.value = selectedMenu;
}

onMounted(() => {
    selectTabMenu('');
    document.addEventListener("scroll", scrollFunction);
    getLeagueContent()
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