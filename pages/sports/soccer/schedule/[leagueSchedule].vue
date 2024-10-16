<template>
    <breadcrumb :main-menu="`Sports Bettings`" :main-menu-route="`sports-category`" :sub-menu="`Soccer`"
        :sub-menu-route="`soccer`" :sub-item="mainTitle">
    </breadcrumb>

    <main-content :main-title-text="mainTitle" :main-content-text="content.main.content"></main-content>
    <br>

    <accordion-h2 :section-title="section1Title">
    </accordion-h2>
    <sport-soccer-league-schedule :league-id="leagueId"></sport-soccer-league-schedule>
    <br>
    <br>

    <!-- section 2 -->
    <accordion-h2 :section-title="content?.section2?.titleH2" :section-content="content?.section2?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content?.section2?.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in content?.section2?.contentListH4" :key="index"
        :section-title="item.title" :section-content="item.content">
    </accordion-h4>

    <br>

    <!-- button options -->
    <div class="btn-wrapper" style="justify-content: center; gap: 1rem;">
        <custom-button-3 class="btn-style" v-for="(button, index) in content.sectionButton.buttonOption" :key="index"
            :label="button.text" :id="button.id" :isSelected="button.id === selectedBtnId"
            @click="selectButton(button)"></custom-button-3>
    </div>

    <br>
    <br>

    <!-- selected button content  -->
    <accordion-h2 :section-title="selectedButtonContent?.section1?.titleH2"
        :section-content="selectedButtonContent?.section1?.contentH2">
    </accordion-h2>

    <br v-if="selectedButtonContent?.section1?.titleH2">

    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in selectedButtonContent?.section1?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true"
        :default-open-panel="item.defaultExpand">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in selectedButtonContent?.section1?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/shared";
import contentSource from '~/assets/script/contentLeagueSchedule.json'

const route = useRoute()
const leagueId = ref(route.query.leagueId);
const selectedButtonContent = ref(null);
const selectedBtnId = ref();

const content = computed(() => {
    const getContent = contentSource.leagueInfo.find(
        (item) => item.leagueId === leagueId.value
    );
    selectedBtnId.value = getContent.sectionButton.buttonOption[0].id;
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

onMounted(() => {
    selectButton(null)
})

function selectButton(value: any) {
    if (!value) {
        selectedBtnId.value = content.value.sectionButton.buttonOption[0].id;
    } else {
        selectedBtnId.value = value.id;
    }

    selectedButtonContent.value = content.value.sectionButton.buttonOptionContent.find(
        (content) => content.buttonId === selectedBtnId.value
    );
}

const section1Title = computed(() => {
    let title = content.value.section1.titleH2;
    title = title.replace('{premier_league_param}', content.value.leagueName)
    title = title.replace('{premier_league_year_from_param}', getThisYear.value);
    title = title.replace('{premier_league_year_to_param}', getNextYear.value);

    return title;
})
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