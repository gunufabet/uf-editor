<template>
    <div class="table-wrapper">
        <table class="bet-type-table">
            <!-- Table Head -->
            <thead>
                <tr class="bet-type-header">
                    <th colspan="2" class="score-time-info">
                        <span class="score-tag">{{ props.score }}</span>
                        <span class="time-tag">{{ props.time }}</span>
                    </th>
                    <th class="bet-type-col"><span class="col-text">FT. HDP</span></th>
                    <th class="bet-type-col"><span class="col-text">FT. O/U</span></th>
                    <th class="bet-type-col"><span class="col-text">FT. 1X2</span></th>
                </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
                <!-- Match - Home -->
                <tr class="match-event-container">
                    <td colspan="2" class="league-info">
                        <span class="league-text">{{ props.homeName }}</span>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.homeOdd_ft_hdp_1"
                            :odds="props.homeOdd_ft_hdp_2"></sport-soccer-match-odds-box>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.homeOdd_ft_ou_1"
                            :odds="props.homeOdd_ft_ou_2"></sport-soccer-match-odds-box>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.homeOdd_ft_1x2_1"
                            :odds="props.homeOdd_ft_1x2_2"></sport-soccer-match-odds-box>
                    </td>
                </tr>

                <!-- Match - Away -->
                <tr class="match-event-container">
                    <td colspan="2" class="league-info">
                        <span class="league-text">{{ props.awayName }}</span>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.awayOdd_ft_hdp_1"
                            :odds="props.awayOdd_ft_hdp_2"></sport-soccer-match-odds-box>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.awayOdd_ft_ou_1"
                            :odds="props.awayOdd_ft_ou_2"></sport-soccer-match-odds-box>
                    </td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.awayOdd_ft_1x2_1"
                            :odds="props.awayOdd_ft_1x2_2"></sport-soccer-match-odds-box>
                    </td>
                </tr>

                <!-- Match Option -->
                <tr class="match-event-container">
                    <td colspan="2" class="league-info">
                        <span class="match-option">
                            <button v-if="hasLiveStream"><img src="/img/soccer/icn-live-stream.svg" alt=""></button>
                            <button v-if="hasStatistic"><img src="/img/soccer/icn-statistic.svg" alt=""></button>
                            <button v-if="hasMoreBetOption"><img src="/img/soccer/icn-more-match-option.svg"
                                    alt=""></button>
                        </span>
                    </td>
                    <td class="match-odds-col"></td>
                    <td class="match-odds-col"></td>
                    <td class="match-odds-col">
                        <sport-soccer-match-odds-box :oddOption="props.odd_ft_1x2_draw_1"
                            :odds="props.odd_ft_1x2_draw_2"></sport-soccer-match-odds-box>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    score: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    homeName: {
        type: String,
        default: ''
    },
    awayName: {
        type: String,
        default: ''
    },
    hasLiveStream: {
        type: Boolean,
        default: false
    },
    hasStatistic: {
        type: Boolean,
        default: false
    },
    hasMoreBetOption: {
        type: Boolean,
        default: false
    },
    homeOdd_ft_hdp_1: {
        type: String,
        default: ''
    },
    homeOdd_ft_hdp_2: {
        type: String,
        default: ''
    },
    homeOdd_ft_ou_1: {
        type: String,
        default: ''
    },
    homeOdd_ft_ou_2: {
        type: String,
        default: ''
    },
    homeOdd_ft_1x2_1: {
        type: String,
        default: ''
    },
    homeOdd_ft_1x2_2: {
        type: String,
        default: ''
    },
    awayOdd_ft_hdp_1: {
        type: String,
        default: ''
    },
    awayOdd_ft_hdp_2: {
        type: String,
        default: ''
    },
    awayOdd_ft_ou_1: {
        type: String,
        default: ''
    },
    awayOdd_ft_ou_2: {
        type: String,
        default: ''
    },
    awayOdd_ft_1x2_1: {
        type: String,
        default: ''
    },
    awayOdd_ft_1x2_2: {
        type: String,
        default: ''
    },
    odd_ft_1x2_draw_1: {
        type: String,
        default: ''
    },
    odd_ft_1x2_draw_2: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.bet-type-header {
    display: flex;
    background: linear-gradient(90deg, #2B2B32 0%, #484141 100%);
    padding: 0.5rem 1rem 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
}

.score-time-info {
    flex: 1;
    display: flex;
}

.bet-type-title {
    // flex: 0 0 auto;
    // display: flex;
    // flex-wrap: wrap;
    // gap: 2.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bet-type-col {
    display: flex;
    justify-content: space-between;
    text-align: center;

    .col-text {
        width: 63px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        color: #EBC76E;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.score-tag {
    color: #FF4242;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.time-tag {
    color: #FFF;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 0.3rem;
}

.match-event-container {
    background: #181818;
    padding: 0.5rem 1rem 0.5rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.league-info {
    flex: 1;
    display: flex;
}

.league-text {
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.match-odds {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.match-odds-col {
    display: flex;
    justify-content: center;
    // padding: 0 2px 0 2px;
    padding: 0 7px 0 7px;
    // margin: 1rem;
    min-width: 0;
    text-align: center;
}

.match-option {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.table-wrapper {
    display: flex;
    justify-content: center;
    /* Align table horizontally (optional) */
    width: 55%;
    /* Full width of the parent container */
    margin-left: 1rem;
}

.bet-type-table {
    width: 100%;
    /* Ensure the table takes the full width */
    max-width: 100%;
    /* Prevents the table from overflowing the container */
    border-collapse: collapse;
    /* Adjust table styling if needed */
}

button {
    padding: 0;
}

@media only screen and (max-width:475px) {
    .table-wrapper {
        width: 100%;
        margin-left: 0;
    }
}
</style>