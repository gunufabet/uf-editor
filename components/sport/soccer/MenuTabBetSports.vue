<template>
    <sub-main-content :section-title="betSportsContent?.title"
        :section-content="betSportsContent?.content"></sub-main-content>

    <table-summary :tableHeader="betSportsContent?.contentH4Table?.header"
        :tableContent="betSportsContent?.contentH4Table?.content"></table-summary>

    <sub-main-content :section-title="``" :section-content="betSportsContent?.content2"></sub-main-content>

    <!-- <sub-main-content :section-sub-content-h3="section2ContentListH3"></sub-main-content> -->
    <accordion-h3 v-for="(item, index) in section2ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h3>

    <accordion-h4 v-for="(item, index) in section2ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <accordion-h3 v-for="(item, index) in section3ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h3>

    <accordion-h4 v-for="(item, index) in section3ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <div v-for="(match, index) in liveMatchLive" :key="index">
        <sport-soccer-live-score-table v-for="(item, index) in match.matchDetail" :key="index" :score="item.score"
            :time="item.time" :home-name="item.homeName" :away-name="item.awayName"
            :has-live-stream="item.hasLiveStream" :has-statistic="item.hasStatistic"
            :has-more-bet-option="item.hasMoreBetOption" :home-odd_ft_hdp_1="item.homeOdd_FT_HDP_1"
            :home-odd_ft_hdp_2="item.homeOdd_FT_HDP_2" :home-odd_ft_ou_1="item.homeOdd_FT_OU_1"
            :home-odd_ft_ou_2="item.homeOdd_FT_OU_2" :home-odd_ft_1x2_1="item.homeOdd_FT_1X2_1"
            :home-odd_ft_1x2_2="item.homeOdd_FT_1X2_2" :away-odd_ft_hdp_1="item.awayOdd_FT_HDP_1"
            :away-odd_ft_hdp_2="item.awayOdd_FT_HDP_2" :away-odd_ft_ou_1="item.awayOdd_FT_OU_1"
            :away-odd_ft_ou_2="item.awayOdd_FT_OU_2" :away-odd_ft_1x2_1="item.awayOdd_FT_1X2_1"
            :away-odd_ft_1x2_2="item.awayOdd_FT_1X2_2" :odd_ft_1x2_draw_1="item.odd_FT_1X2_Draw_1"
            :odd_ft_1x2_draw_2="item.odd_FT_1X2_Draw_2">
        </sport-soccer-live-score-table>
    </div>

    <br>

    <div style="margin: 0 0 0 1rem;" class="hot-match-container event-match-wrapper">
        <sport-soccer-event-match-container v-for="(match, index) in eventMatchList" :key="index"
            :tournamentText="match.tournamentText" :matchRunningTime="match.matchRunningTime"
            :isRunningMatch="match.isRunningMatch" :homeName="match.homeName" :homeScore="match.homeScore"
            :homeIcon="match.homeIcon" :homeIconAlt="match.homeIconAlt" :awayName="match.awayName"
            :awayScore="match.awayScore" :awayIcon="match.awayIcon" :awayIconAlt="match.awayIconAlt"
            :homeOdds="match.homeOdds" :awayOdds="match.awayOdds" :drawOdds="match.drawOdds">
        </sport-soccer-event-match-container>
    </div>

    <accordion-h4 v-for="(item, index) in section5ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <accordion-h3 v-for="(item, index) in section6ContentListH3" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h3>

    <accordion-h4 v-for="(item, index) in section6ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <accordion-h4 v-for="(item, index) in section6ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </accordion-h4>

    <sub-main-content v-for="(item, index) in section7ContentListH4" :key="index" :section-title="item.title"
        :section-content="item.content">
    </sub-main-content>

    <div style="margin-left: 1rem;">
        <div v-for="(item, index) in section8ContentListH3" :key="index">
            <accordion-h3 :section-title="item.title" :section-content="item.content"></accordion-h3>
            <sub-main-content v-for="(detail, indexContentList) in item.contentList" :key="indexContentList"
                :section-title-h4="detail.title" :section-content-h4="detail.content"></sub-main-content>
        </div>
    </div>
    <br>
    <br>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import content from '~/assets/script/content.json'

const betSportsContent = ref(content.Sport.Soccer.sectionWithMenu1.menuContent.find(
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
    content: item.content
}));

const eventMatchList = ref(betSportsContent.value?.section4?.eventMatchList);
const liveMatchLive = ref(betSportsContent.value?.section4?.liveMatchList)

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
section7ContentListH4.value = betSportsContent.value?.section7?.contentListH4.map((item: any) => ({
    title: item.title,
    content: item.content
}));

const section8ContentListH3 = ref<SportSubContentList[]>([]);
section8ContentListH3.value = betSportsContent.value?.section8?.contentListH3.map((item: any) => ({
    title: item.title,
    content: item.content,
    contentList: item.contentListH4
}));

// console.log('section8ContentListH3.value', section8ContentListH3.value)
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