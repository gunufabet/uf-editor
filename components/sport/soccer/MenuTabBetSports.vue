<template>
    <accordion-h2 :section-title="betSportsContent?.title" :section-content="betSportsContent?.content"></accordion-h2>

    <table-summary :tableHeader="betSportsContent?.contentH4Table?.header"
        :tableContent="betSportsContent?.contentH4Table?.content"></table-summary>

    <accordion-h2 :section-title="``" :section-content="betSportsContent?.content2"></accordion-h2>

    <br>

    <accordion-h3 v-for="(item, index) in section2ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in section2ContentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <accordion-h3 v-for="(item, index) in section3ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in section3ContentListH4" :key="index"
        :section-title="item.title" :section-content="item.content"
        :show-running-match-table-list="item.showRunningMatchTableList"
        :show-running-match-list="item.showRunningMatchList">
    </accordion-h4>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in section5ContentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <accordion-h3 v-for="(item, index) in section6ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in section6ContentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in section6ContentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <br>

    <div v-for="(item, index) in section7ContentListH4" :key="index">
        <accordion-h4-style2 :section-title="item?.title" :section-content="item?.content">
        </accordion-h4-style2>
        <br>
    </div>

    <div style="margin-left: 1rem;">
        <div v-for="(item, index) in section8ContentListH3" :key="index">
            <accordion-h3 :section-title="item.title" :section-content="item.content"
                :with-break-line="true"></accordion-h3>

            <accordion-h4-style2 v-for="(detail, indexContentList) in item.contentList" :key="indexContentList"
                :section-title="detail?.title" :section-content="detail?.content">
            </accordion-h4-style2>
            <br>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());
import { useSportStore } from "~/stores/sport";
const { runningLiveScore } = storeToRefs(useSportStore());

const betSportsContent = ref(content.value.Sport.Soccer.sectionWithMenu1.menuContent.find(
    (content) => content.menuTabId === 'sport'
));

const section2ContentListH3 = ref<SportSubContent[]>([]);
section2ContentListH3.value = betSportsContent.value?.section2?.contentListH3.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section2ContentListH4 = ref<SportSubContent[]>([]);
section2ContentListH4.value = betSportsContent.value?.section2?.contentListH4.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section3ContentListH3 = ref<SportSubContent[]>([]);
section3ContentListH3.value = betSportsContent.value?.section3?.contentListH3.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section3ContentListH4 = ref<SportSubContent[]>([]);
section3ContentListH4.value = betSportsContent.value?.section3?.contentListH4.map((item: any) => ({
    title: item.title,
    content: item.content,
    leagueId: item.leagueId,
    leagueId_cigapi: item.leagueId,
    showRunningMatchTableList: item.showRunningMatchTableList,
    showRunningMatchList: item.showRunningMatchList
}));

const eventMatchList = ref([]);

const section5ContentListH4 = ref<SportSubContent[]>([]);
section5ContentListH4.value = betSportsContent.value?.section5?.contentListH4.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section6ContentListH3 = ref<SportSubContent[]>([]);
section6ContentListH3.value = betSportsContent.value?.section6?.contentListH3.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section6ContentListH4 = ref<SportSubContent[]>([]);
section6ContentListH4.value = betSportsContent.value?.section6?.contentListH4.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section7ContentListH4 = ref<SportSubContent[]>([]);
section7ContentListH4.value = betSportsContent.value?.section7?.contentListH4?.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section8ContentListH3 = ref<SportSubContentList[]>([]);
section8ContentListH3.value = betSportsContent.value?.section8?.contentListH3.map((item: any) => ({
    title: item.title,
    content: item.content,
    contentList: item.contentListH4
}));


onMounted(() => {
    mapMatch();
})

function mapMatch() {
    eventMatchList.value = [];
    runningLiveScore.value.forEach((item) => {
        let record = {
            tournamentText: item.attributes.leagueName,
            matchRunningTime: item.attributes.runningMatchMinute,
            isRunningMatch: true,
            homeName: item.attributes.homeName,
            homeScore: item.attributes.homeScore,
            homeIcon: item.attributes?.homeFlagImg?.data?.attributes?.flag || '',
            homeIconAlt: item.attributes.homeName,
            awayName: item.attributes.awayName,
            awayScore: item.attributes.awayScore,
            awayIcon: item.attributes?.awayFlagImg?.data?.attributes?.flag || '',
            awayIconAlt: item.attributes.awayName,
            homeOdds: "2.05",   // Use dynamic data if available
            awayOdds: "3.44",   // Use dynamic data if available
            drawOdds: "2"       // Use dynamic data if available
        };

        eventMatchList.value.push(record);
    });
}
</script>

<style lang="scss" scoped>
.hot-match-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>