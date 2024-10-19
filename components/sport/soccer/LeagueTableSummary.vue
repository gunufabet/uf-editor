<template>
    <br><br>
    <div class="standing-tab-wrapper">
        <div class="standing-tab">
            <div v-for="(menu, index) in standingOptions" :key="index">
                <button class="standing-tab-text" :class="menu.id === selectedMenu ? 'text-highlight' : ''"
                    @click="selectMenu(menu)">
                    {{ menu.text }}
                </button>
            </div>
        </div>
    </div>

    <div v-if="standingContent" class="summary-table-wrapper">
        <table class="summary-table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headerColumn" :key="index">
                        {{ header.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in standingContent" :key="rowIndex" class="column-number-align">
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
                    <td>{{ row.points }}</td>
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
const standingContent = ref();

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

const selectedMenu = ref(standingOptions.value[0].id);

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
    },
    {
        id: 'standing-pts',
        text: 'PTS',
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

        selectMenu(null);
    }
}

function selectMenu(menu: any) {
    if (!menu?.id) {
        selectedMenu.value = standingOptions.value[0].id;
    } else { selectedMenu.value = menu.id; }

    if (selectedMenu.value === 'home') {
        standingContent.value = standingHome.value
    } else if (selectedMenu.value === 'away') {
        standingContent.value = standingAway.value
    } else {
        standingContent.value = standingAll.value
    }   
}
</script>

<style lang="scss" scoped>
.standing-tab-wrapper {
    padding-left: 2rem;
}

.standing-tab {
    padding: 1rem 0 1rem 0;
    position: relative;
    flex-shrink: 0;
    background: linear-gradient(0deg, #29272A 0%, #000 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    // flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    width: 75%;
}

.summary-table-wrapper {
    padding: 0 0 1rem 0;
    overflow-x: auto;
    padding-left: 2rem;
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
    background: #161619;

    color: #EBC76E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: right;
}

.summary-table th:nth-child(1) {
    text-align: left;
}

.summary-table th:nth-child(2) {
    text-align: left;
    font-weight: 700;
}

.summary-table th:last-child,
.summary-table td:last-child {
    font-weight: 700;
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
    background: #161619;
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
    background: #161619;
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
    background: #161619;
}

/* Optional: Ensure the headers stay above the sticky columns */
.summary-table th {
    z-index: 2;
}

.standing-tab-text {
    color: #8B8B8B;
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

    .summary-table-wrapper {
        padding-left: 0;
    }

    .standing-tab {
        justify-content: start;
        width: 100%;
    }

    .standing-tab-wrapper {
        padding-left: 0;
    }
}
</style>