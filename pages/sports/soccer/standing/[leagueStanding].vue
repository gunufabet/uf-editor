<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="section2Title">
    </breadcrumb>

    <main-content :main-title-text="mainTitle" :main-content-text="content.main.content"></main-content>

    <!-- section 2 -->
    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="section2Title"
        :section-content="content.section2.content">
    </accordion-h2-style-2>

    <sport-soccer-league-table-summary v-if="content.section2?.showLeagueTable"
        :league-id="leagueId"></sport-soccer-league-table-summary>

    <accordion-h2 style="margin-top: 30px;" :section-title="content.section3.titleH2"
        :section-content="content.section3.contentH2">
    </accordion-h2>

    <br><br>

    <!-- section 3 -->
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section3.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"
        :default-open-panel="item.defaultExpand"></accordion-h3>

    <br><br>

    <!-- section 4 -->
    <accordion-h2 :section-title="content?.section4?.titleH2" :section-content="content?.section4?.contentH2">
    </accordion-h2>

    <br><br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section4?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="true"
        :default-open-panel="item.defaultExpand">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in content?.section4?.contentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <!-- section 5 -->
    <br><br>

    <accordion-h2 :section-title="content?.section5?.titleH2" :section-content="content?.section5?.contentH2">
    </accordion-h2>

    <br><br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section5?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="true"
        :default-open-panel="item.defaultExpand">
    </accordion-h3>

    <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(item, index) in content?.section5?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4-style-2>

    <!-- section 6 -->
    <br><br>

    <accordion-h2 :section-title="content?.section6?.titleH2" :section-content="content?.section6?.contentH2">
    </accordion-h2>

    <br><br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section6?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="true"
        :default-open-panel="item.defaultExpand">
    </accordion-h3>

    <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(item, index) in content?.section6?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4-style-2>

    <!-- <button id="scrollupBtn" @click="topFunction">
        <img src="/img/icn-scrollup.svg" alt="scroll up">
    </button> -->
</template>

<script setup lang="ts">
import { LanguageType } from "~/enums/lang-code";
import { useDateFormat } from "@vueuse/shared";
import source from '~/assets/script/contentLeagueStanding.json'
import sourceTH from '~/assets/script/th/contentLeagueStanding.json'
const contentSource = ref();
const { locale } = useI18n()

if (locale.value === LanguageType.THAILAND) {
    contentSource.value = sourceTH;
} else {
    contentSource.value = source;
}

const route = useRoute()
const leagueId = ref(route.query.leagueId);

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

onMounted(() => {
    document.addEventListener("scroll", scrollFunction);
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