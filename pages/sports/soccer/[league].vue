<template>
    <main-content :main-title-text="mainTitle" :main-content-text="content.main.content"></main-content>

    <!-- section 2 -->
    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="section2Title"
        :section-content="content.section2.content">
    </accordion-h2-style-2>

    <accordion-h2 style="margin-top: 30px;" :section-title="content.section3.titleH2"
        :section-content="content.section3.contentH2">
    </accordion-h2>

    <br>

    <!-- section 3 -->
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section3.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>

    <br>

    <!-- section 4 -->
    <accordion-h2 :section-title="content?.section4?.titleH2"
        :section-content="content?.section4?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section4?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in content?.section4?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <!-- section 5 -->
    <br>

    <accordion-h2 :section-title="content?.section5?.titleH2"
        :section-content="content?.section5?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section5?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(item, index) in content?.section5?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4-style-2>

    <!-- section 6 -->
    <br>

    <accordion-h2 :section-title="content?.section6?.titleH2"
        :section-content="content?.section6?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section6?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(item, index) in content?.section6?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4-style-2>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/shared";
import type { SportSubContent } from "~/types/strapi-model";
import content from '~/assets/script/contentLeagueStanding.json'

const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {
        // locales: locale.value === "th" ? "th-TH" : "en-US",
    }).value.replace('"', "");

onMounted(() => {
    mapLeagueName()
})

const getThisYear = computed(() => {
    let todayDate = new Date();
    return dateFormat(todayDate, "YYYY");
})

const getNextYear = computed(() => {
    let nextYearDate = new Date();
    console.log('nextYearDate-1', nextYearDate)
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
    console.log('nextYearDate-2', nextYearDate)
    return dateFormat(nextYearDate, "YYYY");
})

const mainTitle = computed(() => {
    let title = content.main.title;
    title = title.replace(/\{premier_league_param\}/g, content.leagueInfo.leagueName) 
    title = title.replace('{premier_league_year_param}', getThisYear.value)

    return title;
})

const section2Title = computed(() => {
    let title = content.section2.title;
    title = title.replace('{premier_league_param}', content.leagueInfo.leagueName)
    title = title.replace('{premier_league_year_from_param}', getThisYear.value);
    title = title.replace('{premier_league_year_to_param}', getNextYear.value);

    return title;
})

function mapLeagueName() {
    //         // let todayDate = new Date();

    //         // let getYear = dateFormat(todayDate, "YYYY");
    //         // let getNextYear = dateFormat(todayDate, "YYYY");
    //         // getNextYear.setDate(todayDate.getFullYear() + 1)

    //         // content.main.title = content.main.title.replace('{premier_league_param}', content.leagueInfo.leagueName)
    //         // content.main.title = content.main.title.replace('{premier_league_year_param}', getYear)

    //         // section2
    //         content.section2.title = content.section2.title.replace('{premier_league_param}', content.leagueInfo.leagueName);
    //         content.section2.title = content.section2.title.replace('{premier_league_year_from_param}', getYear);
    //         content.section2.title = content.section2.title.replace('{premier_league_year_to_param}', getNextYear);
}
</script>