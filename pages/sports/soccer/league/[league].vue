<template>
    <main-content :main-title-text="mainTitle" :main-content-text="content.main.content"></main-content>

    <br>

    <!-- section 2 -->
    <accordion-h2 :section-title="content?.section2?.titleH2" :section-content="content?.section2?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section2?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4-style-2 style="margin-left: 1rem;" v-for="(item, index) in content?.section2?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4-style-2>

    <br>

    <!-- sectionWithMenu1 -->
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="content?.sectionWithMenu1.menuTab" :h2Title="true"></tab-menu>

    <accordion-h2 :section-title="selectedMenuContent?.section1?.titleH2"
        :section-content="selectedMenuContent?.section1?.contentH2">
    </accordion-h2>

    <br>

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
import { useDateFormat } from "@vueuse/shared";
import contentSource from '~/assets/script/contentLeague.json'
const route = useRoute()
const leagueId = ref(route.query.leagueId);
const selectedMenuId = ref('');
const selectedMenuContent = ref();

const content = computed(() => {
    const getContent = contentSource.leagueInfo.find(
        (item) => item.leagueId === leagueId.value
    );
    return getContent;
})

const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {
        // locales: locale.value === "th" ? "th-TH" : "en-US",
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
})
</script>