<template>
    <div v-if="standingAll" class="summary-table-wrapper">
        <table class="summary-table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headerColumn" :key="index">
                        {{ header.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in standingAll" :key="rowIndex" class="column-number-align">
                    <td>{{ row.rank }}</td>
                    <td>
                        <img :src="row.flagImg?.data?.attributes?.flag ? 'data:image/png;base64,' +
        row.flagImg?.data?.attributes?.flag : '/img/soccer/icn-flag-placeholder.svg'" class="
                            team-img" />
                        {{ row.teamName }}
                    </td>
                    <td>{{ row.matches }}</td>
                    <td>{{ row.gf - row.ga }}</td>
                    <td>{{ row.win }}</td>
                    <td>{{ row.draw }}</td>
                    <td>{{ row.loss }}</td>
                    <td>{{ row.gf }}</td>
                    <td>{{ row.ga }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
const content = ref();
const standingAll = ref();
const standingHome = ref();
const standingAway = ref();

const props = defineProps({
    leagueId: {
        type: String,
        default: 92
    },
});

const standingOptions = ref([
    {
        id: 'general',
        text: 'General',
    },
    {
        id: 'home',
        text: 'Home',
    },
    {
        id: 'away',
        text: 'Away',
    }
]
);

const headerColumn = ref([
    {
        id: 'rank',
        text: '#',
    },
    {
        id: 'standing-team',
        text: 'TEAM',
    },
    {
        id: 'standing-played-matches',
        text: 'P',
    },
    {
        id: 'standing-goal-difference',
        text: 'GD',
    },
    {
        id: 'standing-win',
        text: 'W',
    },
    {
        id: 'standing-draw',
        text: 'D',
    },
    {
        id: 'standing-loss',
        text: 'L',
    },
    {
        id: 'standing-goal-for',
        text: 'F',
    },
    {
        id: 'standing-goal-against',
        text: 'A',
    }
]);
onMounted(() => {
    fetchStanding()
})

async function fetchStanding() {
    const response = await callApi.getStanding(props.leagueId);
    if (response.succ) {
        content.value = response.data;
        standingAll.value = content.value[0].attributes.all
        standingHome.value = content.value[0].attributes.home
        standingAway.value = content.value[0].attributes.away
    }
}
</script>

<style lang="scss" scoped>
.summary-table-wrapper {
    padding: 1rem 0 1rem 0;
    overflow-x: auto;
}

.summary-table {
    width: 75%;
    table-layout: inherit;
    border-collapse: collapse;
}

.summary-table th,
.summary-table td {
    text-align: left;
    padding: 1rem 0.7rem 1rem 0.7rem;
}

.summary-table th {
    // background: #2B2B32;
    background: rgba(43, 43, 50, 0.5);

    color: #EBC76E;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
}

.summary-table th:nth-child(1) {
    text-align: left;
}

.summary-table th:nth-child(2) {
    text-align: left;
}

.summary-table td {
    color: #D9D9D9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-content: center;
    border-bottom: 1px solid rgba(204, 171, 103, 0.5);
    text-align: right;
}

/* First column */
.summary-table td:nth-child(1) {
    text-align: left;
}

/* Second column */
.summary-table td:nth-child(2) {
    text-align: left;
}

.summary-table tr {
    background: transparent;
}

.summary-table-bg {
    // background: #2B2B32;
    background: rgba(43, 43, 50, 0.5);
}

.team-img {
    vertical-align: middle;
    margin-bottom: 3px;
    width: 17px;
    height: 17px;
    margin-right: 0.3rem;
}

/* Apply sticky behavior to the first and second columns */
.summary-table th:nth-child(1),
.summary-table td:nth-child(1) {
    position: sticky;
    left: 0;
    background-color: #000;
    z-index: 1;
}

.summary-table th:nth-child(1) {
    // background: #2B2B32;
    background: rgba(43, 43, 50, 0.5);
}

.summary-table th:nth-child(2),
.summary-table td:nth-child(2) {
    position: sticky;
    left: 34px;
    /* Adjust as needed based on the width of the first column */

    background-color: #000;
    z-index: 1;

    // border-right: 2px solid red;
    // background: linear-gradient(90deg, rgba(106, 81, 18, 0.51) 0%, rgba(57, 46, 17, 0.00) 100%);    
    // border-right: none;
}

.summary-table th:nth-child(2) {
    // background: #2B2B32;
    background: rgba(43, 43, 50, 0.5);
}

/* Optional: Ensure the headers stay above the sticky columns */
.summary-table th {
    z-index: 2;
}

@media only screen and (max-width:475px) {

    /* Pseudo-element to create the gradient effect */
    .summary-table td:nth-child(2)::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 9px;
        /* Width of the 'border' */
        background: linear-gradient(90deg, rgba(106, 81, 18, 0.51) 0%, rgba(57, 46, 17, 0.00) 100%);
    }

    .summary-table {
        width: 100%;
    }
}
</style>