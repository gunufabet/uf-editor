<template>
    <br>

    <div class="btn-wrapper" style="justify-content: center; gap: 1rem;">
        <custom-button-3 v-for="(button, index) in buttonOption" :key="index" :label="button.text" :id="button.id"
            :isSelected="button.id === selectedBtnId" @click="selectButton(button)"></custom-button-3>
    </div>

    <br>
    <aside-content :key="asideTitleText" :aside-title-text="asideTitleText"
        :aside-content-text="asideContentText"></aside-content>

    <div v-if="showNews">
        <div style="margin: 1rem;">
            <img style="margin-right: 0.3rem;" src="/img/soccer/icn-happening-now.svg" alt="soccer happening now">
            <span class="happening-now-text-1">{{ $t('sport.news.happening') }} </span><span
                class="happening-now-text-2">{{ $t('sport.news.now') }}</span>
        </div>

        <div class="btn-wrapper event-match-wrapper">
            <sport-soccer-article-container v-for="(news, index) in newsList" :key="index" :newsId="news.newsId"
                :newsTime="news.dateDisplay" :newsImgSrc="news.newsImg" :newsImgAlt="news.newsAlt"
                :newsContent="news.newsShortDescription">
            </sport-soccer-article-container>
        </div>

        <br>
        <custom-button-1 :label="$t('sport.button.viewMoreFootballNews')"></custom-button-1>
        <br>

        <div class="btn-wrapper">
            <custom-button-4 v-for="(button, index) in sportsButtonList" :key="index" :id="button.id"
                :label="button.text" :label2="button.text2" :iconSrc="button.iconSrc" :iconAlt="button.iconAlt"
                @click="clickSportButton(button)">
            </custom-button-4>
        </div>
    </div>

    <div v-if="showEvents">
        <div class="event-title-container">
            <img style="margin-right: 0.3rem;" src="/img/soccer/icn-feature.svg" alt="soccer happening now">
            <span class="happening-now-text-1">{{ $t('sport.news.featured') }} </span>
            <span style="margin-left: 0.3rem;" class="happening-now-text-2">{{ $t('sport.news.events') }}</span>
        </div>

        <div style="margin: 0 0 0 1rem;" class="hot-match-container event-match-wrapper">
            <sport-soccer-event-match-container v-for="(match, index) in eventMatchList" :key="index"
                :tournamentText="match.tournamentText" :matchRunningTime="match.matchRunningTime"
                :isRunningMatch="match.isRunningMatch" :homeName="match.homeName" :homeScore="match.homeScore"
                :homeIcon="match.homeIcon" :homeIconAlt="match.homeIconAlt" :awayName="match.awayName"
                :awayScore="match.awayScore" :awayIcon="match.awayIcon" :awayIconAlt="match.awayIconAlt"
                :homeOdds="match.homeOdds" :awayOdds="match.awayOdds" :drawOdds="match.drawOdds">
            </sport-soccer-event-match-container>
        </div>

        <br>
        <custom-button-1 :label="$t('sport.button.viewMoreFeaturedMatches')"></custom-button-1>
        <br>
        
        <div class="btn-wrapper">
            <custom-button-4 v-for="(button, index) in sportsButtonList" :key="index" :id="button.id"
                :label="button.text" :label2="button.text2" :iconSrc="button.iconSrc" :iconAlt="button.iconAlt">
            </custom-button-4>
        </div>
    </div>
</template>

<script setup lang="ts">
import content from '~/assets/script/content.json'
const buttonOption = ref(content.Sport.Soccer.sectionNewsEvents.buttonOption);
const selectedBtnId = ref(content.Sport.Soccer.sectionNewsEvents.buttonOption[0].id);
const asideTitleText = ref('');
const asideContentText = ref('');
const showNews = ref(false);
const showEvents = ref(false);
const newsList = ref(content.Sport.Soccer.newsList);
const sportsButtonList = ref(content.Sport.Soccer.sectionSportsButton.buttonOption);
const eventMatchList = ref(content.Sport.Soccer.eventMatchList);

onMounted(() => {
    selectButton(null)
})

function selectButton(value: any) {
    if (!value) {
        selectedBtnId.value = content.Sport.Soccer.sectionNewsEvents.buttonOption[0].id
    } else {
        selectedBtnId.value = value.id;
    }

    const selectedButton = content.Sport.Soccer.sectionNewsEvents.buttonOptionContent.find(
        (content) => content.buttonOptionId === selectedBtnId.value
    );

    asideTitleText.value = selectedButton?.title || '';
    asideContentText.value = selectedButton?.content || '';
    showNews.value = selectedButton?.showNews || false;
    showEvents.value = selectedButton?.showEvents || false;
}

async function clickSportButton(button: any) {
    const router = useRouter()
    const localePath = useLocalePath()

    await router.push(localePath({ name: 'sports-category', params: { category: button.url } }));
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

.happening-now-text-1 {
    color: #EBC76E;
    font-size: 12px;
    font-weight: 700;
}

.happening-now-text-2 {
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
}

.event-title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
}

.event-match-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    // padding-bottom: 1rem;
    gap: 1rem;
    padding-right: 1rem;
}

@media only screen and (max-width:475px) {
    .btn-wrapper {
        justify-content: start;
    }
}
</style>