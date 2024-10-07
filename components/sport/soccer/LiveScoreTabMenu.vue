<template>
    <div class="live-tab">
        <div v-for="(menu, index) in menuTab" :key="index">
            <button class="live-tab-text" :class="menu.id === selectedMenu ? 'text-highlight' : ''"
                @click="selectMenu(menu)">
                {{ menu.text }}
                <div class="count-button" :class="menu.isLive ? 'count-button-live' : 'count-button-others'">
                    <p class="count-button-text">{{ menu.total }}</p>
                </div>
            </button>
        </div>
    </div>

    <div v-for="(match, index) in liveMatchLive" :key="index">
        <sport-soccer-live-score-caption-content :aside-title-text="match.title"
            :aside-content-text="match.content"></sport-soccer-live-score-caption-content>

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

    <custom-button-1 :label="t('sport.button.viewMore')"></custom-button-1>
</template>


<script setup lang="ts">
import content from '~/assets/script/content.json'
const { t } = useI18n()
const liveMatchCount = ref(content.Sport.Soccer.sectionLiveSoccerMatch.liveMatchCount)
const liveMatchLive = ref(content.Sport.Soccer.sectionLiveSoccerMatch.liveMatchList)
const asideTitleText = ref('LIGA PORTUGAL 3');
const asideContentText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

const selectedMenu = ref('ufabet-soccer-live-matches');

const menuTab = ref([
    {
        id: 'ufabet-soccer-live-matches',
        href: 'ufabet-soccer-live-matches',
        text: 'Live',
        total: liveMatchCount.value.live,
        isLive: true
    },
    {
        id: 'ufabet-soccer-today-matches',
        href: 'ufabet-soccer-today-matches',
        text: 'Today',
        total: liveMatchCount.value.today,
        isLive: false
    },
    {
        id: 'ufabet-soccer-early-matches',
        href: 'ufabet-soccer-today-matches',
        text: 'Early',
        total: liveMatchCount.value.early,
        isLive: false
    },
    {
        id: 'ufabet-soccer-outright-matches',
        href: 'ufabet-soccer-outright-matches',
        text: 'Outright',
        total: liveMatchCount.value.outright,
        isLive: false
    }
]);

function selectMenu(menu: any) {
    selectedMenu.value = menu.id;
}
</script>

<style lang="scss" scoped>
.live-tab {
    display: flex;
    flex-direction: row;
    padding: 1rem 0 1rem 0;
    flex-shrink: 0;
    background: linear-gradient(0deg, #29272A 0%, #000 100%);
    color: #FFF;
    justify-content: center;
}

.live-tab-text {
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 0.5rem 0 0.5rem;
    display: inline-flex;
    /* Ensure inline flex layout */
    align-items: center;
    /* Align text and count vertically */
    gap: 0.25rem;
    /* Adds spacing between text and count-button */
}

.text-highlight {
    color: #EBC76E;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.count-button {
    border-radius: 50%;

    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #FFF;
    text-align: center;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &-live {
        background: #EF2C45;
    }

    &-others {
        background: #674E2B;
        // opacity: 0.6;
    }
}

.count-button-text {
    white-space: nowrap;
}

@media only screen and (max-width:475px) {
    .live-tab-text {
        font-size: 14px;
    }

    .text-highlight {
        font-size: 14px;
    }

    .count-button {        
        font-size: 12px;
        width: 1.2rem;
        height: 1.2rem;
        padding: 3px;
    }
}
</style>