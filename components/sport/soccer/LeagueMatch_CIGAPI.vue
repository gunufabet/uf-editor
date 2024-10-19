<template>
    <h2 v-if="matchOddsList" class="league-match-title">
        Matches
    </h2>
    <div v-for="(item, index) in matchOddsList" :key="index" class="match-wrapper">
        <table class="match-table">
            <thead class="table-header-wrapper"
                v-if="index === 0 || getDate(item.time) !== getDate(matchOddsList[index - 1]?.time)">
                <tr>
                    <th>{{ formatApiDate(getDate(item.time)) }}</th>
                    <th>Home</th>
                    <th>Draw</th>
                    <th>Away</th>
                </tr>
            </thead>
            <tbody>
                <tr style="cursor: pointer;">
                    <td>
                        <img src="/img/soccer/icn-flag-placeholder.svg" :alt="`${item.homeName}-flag`"
                            class="team-flag-icn" /><span class="team-text">{{
        item.homeName }}</span>

                        <br><br>

                        <img src="/img/soccer/icn-flag-placeholder.svg" :alt="`${item.awayName}-flag`"
                            class="team-flag-icn" /><span class="team-text">{{
        item.awayName }}</span>

                        <br><br>

                        <div class="match-time-row">
                            <span class="match-time-text">{{ getTime(item.time) }}</span>
                            <img src="/img/soccer/icn-statistic.svg" alt="match-statistic">
                        </div>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="item.homeOdd_FT_HDP_2"
                            :with-min-width="false"></custom-button-3>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="item.odd_FT_1X2_Draw_2"
                            :with-min-width="false"></custom-button-3>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="item.awayOdd_FT_HDP_2"
                            :with-min-width="false"></custom-button-3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <custom-button-1 v-if="matchOddsList" :label="`All Matches`"></custom-button-1>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/shared";
import { MarketType } from "~/enums/market-type.js";
const { locale } = useI18n();
const { t } = useI18n()

const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {}).value.replace('"', "");

const props = defineProps({
    leagueId: {
        type: String,
        default: '92'
    },
    leagueId_cigapi: {
        type: String,
        default: '55'
    },
    marketType: {
        type: String,
        default: MarketType.EARLY
    },
});

const matchOddsList = ref()

onMounted(() => {
    getMatch()
})

async function getMatch() {
    matchOddsList.value = await useSportStore().fetchSportOdds(locale.value, props.marketType, props.leagueId_cigapi, 5)
}

function formatDate(matchDate: Date) {
    let fullnameOfDay = dateFormat(matchDate, "dddd");
    let nameOfDay = dateFormat(matchDate, "DD");
    let nameOfMonth = dateFormat(matchDate, "MMM");
    let suffix = getOrdinalSuffix(parseInt(nameOfDay, 10))
    // return dateFormat(matchDate, "dddd, DD MMM");
    return `${fullnameOfDay}, ${nameOfDay}${suffix} ${nameOfMonth}`;
}

function formatApiDate(apiDate: String) {
    const [day, month] = apiDate.split('/').map(Number); // Split and convert to numbers
    const currentYear = new Date().getFullYear(); // Get the current year
    // Create a Date object
    const matchDate = new Date(currentYear, month - 1, day); // Month is 0-indexed, so subtract 1

    return formatDate(matchDate);
}

function getOrdinalSuffix(day: Number) {
    if (day > 3 && day < 21) return 'th'; // 4th to 20th all get "th"
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function getDate(value: String) {
    try {
        const [date, time] = value.split(' ');
        return date;
    } catch (error) {

    }
    return value
}

function getTime(value: String) {
    try {
        const [date, time] = value.split(' ');
        return time;
    } catch (error) {

    }
    return value
}
</script>

<style lang="scss" scoped>
.table-header-wrapper {
    background: linear-gradient(90deg, #484141 0%, rgba(72, 65, 65, 0.00) 100%);
}

.match-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    th {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;


        color: #E5C87B;
        font-size: 14px;
        font-weight: 400;
    }

    td {
        padding-left: 1rem;
        border-bottom: 1px solid rgba(204, 171, 103, 0.5);
        padding-top: 0.5rem;
    }
}

th:nth-child(2),
th:nth-child(3),
th:nth-child(4) {
    width: 85px;
    text-align: center;

    color: #FFF;
    font-size: 14px;
    font-weight: 400;
}

td:nth-child(2),
td:nth-child(3),
td:nth-child(4) {
    width: 85px;
    text-align: right;
    align-content: flex-start;
}

th:nth-child(1),
td:nth-child(1) {
    width: auto;
    text-align: left;
}

th:nth-child(4),
td:nth-child(4) {
    padding-right: 1rem;
}

.league-match-title {
    color: #EBC76E;
    font-size: 24px;
    font-weight: 400;
    padding: 1rem;
}

.team-flag-icn {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: middle;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.team-text {
    color: #FFF;
    font-size: 14px;
}

.match-time-text {
    color: #E5C87B;
    font-size: 14px;
    margin-right: 0.5rem;
    align-content: center;
}

.match-time-row {
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.7rem;
}

@media only screen and (max-width:475px) {
    .match-table {
        width: 100%;

        th {
            font-size: 12px;
        }
    }

    th:nth-child(2),
    th:nth-child(3),
    th:nth-child(4) {
        width: 50px;
        font-size: 12px;
    }


    .team-text {
        font-size: 12px;
    }

    .league-match-title {}

    .match-time-text {
        font-size: 12px;
    }

    td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
        width: 50px;
    }
}
</style>