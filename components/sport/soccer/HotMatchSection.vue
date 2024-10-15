<template>
    <div v-if="hotMatchList.length > 0" class="hot-match-bg">
        <div class="title-container">
            <div style="display: flex; margin-left: 1.3rem">
                <!-- <img style="margin-right: 0.3rem;" src="/img/soccer/icn-hot-black.svg" alt="hot matches"> -->
                <svg style="margin-right: 0.3rem;" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 10 14" fill="none">
                    <path
                        d="M8.81487 5.43406C8.7774 5.39014 8.73199 5.39877 8.7082 5.40773C8.68826 5.4153 8.64257 5.43947 8.64889 5.50005C8.65649 5.5728 8.66075 5.64696 8.66156 5.72052C8.66495 6.02566 8.53416 6.32461 8.30275 6.54071C8.07281 6.75541 7.77037 6.87109 7.44835 6.86774C7.00848 6.86248 6.64365 6.64776 6.39328 6.24676C6.18626 5.91519 6.27725 5.48754 6.37358 5.03475C6.42996 4.76972 6.48826 4.49566 6.48826 4.23482C6.48826 2.20386 5.02942 1.03213 4.15983 0.514447C4.14184 0.503758 4.12472 0.5 4.10956 0.5C4.0849 0.5 4.06536 0.509953 4.05573 0.516047C4.03707 0.527879 4.0072 0.554844 4.0168 0.602578C4.34919 2.25454 3.35778 3.24809 2.30816 4.29997C1.22626 5.38422 0 6.61315 0 8.82954C0 11.4049 2.23861 13.5 4.99025 13.5C7.25584 13.5 9.25338 12.0217 9.84783 9.90495C10.2532 8.46168 9.82841 6.6232 8.81487 5.43406ZM5.11474 12.5031C4.42572 12.5325 3.77044 12.3012 3.26994 11.8533C2.77481 11.4102 2.49082 10.7918 2.49082 10.1567C2.49082 8.96485 2.97774 8.08989 4.28736 6.92832C4.30879 6.9093 4.33074 6.90329 4.34987 6.90329C4.3672 6.90329 4.38223 6.90824 4.39257 6.91288C4.41435 6.92271 4.45016 6.94703 4.44533 6.99964C4.39851 7.50961 4.39932 7.9329 4.44772 8.2578C4.57143 9.08768 5.22054 9.64529 6.06304 9.64529C6.4761 9.64529 6.86955 9.4998 7.17093 9.23561C7.2059 9.20494 7.24497 9.20885 7.25994 9.21182C7.27977 9.21583 7.30633 9.22721 7.32025 9.25861C7.4452 9.54098 7.50907 9.84072 7.51004 10.1494C7.51403 11.3917 6.43951 12.4475 5.11474 12.5031Z"
                        fill="url(#paint0_linear_169_1257)" />
                    <defs>
                        <linearGradient id="paint0_linear_169_1257" x1="5" y1="0.5" x2="5" y2="13.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#484141" />
                            <stop offset="1" stop-color="#484141" stop-opacity="0.65" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div>
                <span class="hot-match-text-1">{{ $t('sport.news.hot') }} </span>
                <span class="hot-match-text-2">{{ $t('sport.news.matches') }}</span>
            </div>
        </div>
        <div style="margin: 1rem;" class="hot-match-container">
            <sport-soccer-match-container v-for="(match, index) in hotMatchList" :key="index"
                :tournamentText="match.tournamentText" :matchRunningTime="match.matchRunningTime"
                :isRunningMatch="match.isRunningMatch" :homeName="match.homeName" :homeScore="match.homeScore"
                :homeIcon="match.homeIcon" :homeIconAlt="match.homeIconAlt" :awayName="match.awayName"
                :awayScore="match.awayScore" :awayIcon="match.awayIcon" :awayIconAlt="match.awayIconAlt"
                :homeOdds="match.homeOdds" :awayOdds="match.awayOdds" :drawOdds="match.drawOdds">
            </sport-soccer-match-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSportStore } from "~/stores/sport";
const { runningLiveScore } = storeToRefs(useSportStore());

const hotMatchList = ref([]);

onMounted(() => {
    mapMatch();
})

function mapMatch() {
    hotMatchList.value = [];
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

        hotMatchList.value.push(record);
    });
}
</script>

<style lang="scss" scoped>
.title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.hot-match-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
}

.hot-match-text-1 {
    color: #181818;
    font-size: 16px;
    font-weight: 700;
}

.hot-match-text-2 {
    color: #181818;
    font-size: 16px;
    font-weight: 500;
    margin-left: 0.1rem;
}

.hot-match-bg {
    background: linear-gradient(100deg, #EBC76E 0%, #BA8C4E 100%);
    padding-top: 1rem;
    padding-bottom: 1rem;
}

@media only screen and (max-width:475px) {
    .hot-match-text-1 {
        font-size: 14px;
    }

    .hot-match-text-2 {
        font-size: 14px;
    }
}
</style>