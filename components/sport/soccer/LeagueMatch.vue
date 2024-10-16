<template>
    <h2 v-if="content" class="league-match-title">
        Matches
    </h2>
    <div v-for="(item, index) in content" :key="index" class="match-wrapper">
        <table class="match-table">
            <thead class="table-header-wrapper"
                v-if="index === 0 || item.attributes.matchDate !== content[index - 1].attributes.matchDate">
                <tr>
                    <th>{{ formatDate(item.attributes.matchDate) }}</th>
                    <th>Home</th>
                    <th>Draw</th>
                    <th>Away</th>
                </tr>
            </thead>
            <tbody>
                <tr style="cursor: pointer;">
                    <td>
                        <img :src="item.attributes?.homeFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item.attributes.homeFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="`${item.attributes.homeName}-flag`" class="team-flag-icn" /><span class="team-text">{{
        item.attributes.homeName }}</span>

                        <br>

                        <img :src="item.attributes.awayFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item.attributes.awayFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="`${item.attributes.awayName}-flag`" class="team-flag-icn" /><span class="team-text">{{
        item.attributes.awayName }}</span>

                        <br>

                        <div class="match-time-row">
                            <span class="match-time-text">{{ item.attributes.matchTime }}</span>
                            <img src="/img/soccer/icn-statistic.svg" alt="match-statistic">
                        </div>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="`2.09`"
                            :with-min-width="false"></custom-button-3>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="`3.11`"
                            :with-min-width="false"></custom-button-3>
                    </td>
                    <td>
                        <custom-button-3 style="color: #EBC76E;" :label="`2.99`"
                            :with-min-width="false"></custom-button-3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <custom-button-1 v-if="content" :label="`All Matches`"></custom-button-1>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { useDateFormat } from "@vueuse/shared";
const { t } = useI18n()

const content = ref();
const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {
        // locales: locale.value === "th" ? "th-TH" : "en-US",
    }).value.replace('"', "");

const props = defineProps({
    leagueId: {
        type: String,
        default: 92
    },
});

onMounted(() => {
    fetchMatch()
})

async function fetchMatch() {
    const response = await callApi.getFixtures(props.leagueId);
    if (response.succ) {
        content.value = response.data
    }
}

function formatDate(matchDate: Date) {
    let fullnameOfDay = dateFormat(matchDate, "dddd");
    let nameOfDay = dateFormat(matchDate, "DD");
    let nameOfMonth = dateFormat(matchDate, "MMM");
    let suffix = getOrdinalSuffix(parseInt(nameOfDay, 10))
    // return dateFormat(matchDate, "dddd, DD MMM");
    return `${fullnameOfDay}, ${nameOfDay}${suffix} ${nameOfMonth}`;
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

    .league-match-title {
    }

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