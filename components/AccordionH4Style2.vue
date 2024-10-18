<template>
    <details class="accordion-panel disabled" :open="true">
        <summary @click.prevent="false">
            <h4 class="accordion">
                <span class="accordion-text" :class="openPanel ? 'expand' : ''">{{ props.sectionTitle }}</span>
                <div v-if="props.sectionTitle" class="accordion-indent"></div>
            </h4>
        </summary>
        <!-- Content with shadow effect -->
        <p class="accordion-panel-content" v-html="props.sectionContent" @click="clickPanel"
            :class="openPanel ? 'open' : 'close'"></p>

        <div v-if="openPanel">
            <sport-soccer-league-match-CIGAPI v-if="showRunningMatchTableList" :league-id="leagueId"
                :league-id-cigapi="leagueId_cigapi"></sport-soccer-league-match-CIGAPI>

            <sport-soccer-hot-match-section :key="sectionTitle" v-if="showRunningMatchList" :league-id="leagueId"
                :leagueId_cigapi="leagueId_cigapi" :is-hot-match="false"
                :market-type="MarketType.RUNNING"></sport-soccer-hot-match-section>

            <table-summary v-if="sectionContentTableHeader" :tableHeader="sectionContentTableHeader"
                :tableContent="sectionContentTableContent"></table-summary>
        </div>
    </details>
</template>

<script setup lang="ts">
import { MarketType } from "~/enums/market-type.js";

const openPanel = ref(false);

const props = defineProps({
    sectionTitle: {
        type: String,
        default: ''
    },
    sectionContent: {
        type: String,
        default: ''
    },
    showRunningMatchTableList: {
        type: Boolean,
        default: false
    },
    showRunningMatchList: {
        type: Boolean,
        default: false
    },
    leagueId: {
        type: String,
        default: ''
    },
    leagueId_cigapi: {
        type: String,
        default: ''
    },
    sectionContentTableHeader: {
        type: Array,
        default: []
    },
    sectionContentTableContent: {
        type: Array,
        default: []
    }
});

function clickPanel() {
    openPanel.value = !openPanel.value;
}
</script>

<style lang="scss" scoped>
details.disabled summary {
    pointer-events: none;
    /* prevents click events */
    //   user-select: none; /* prevents text selection */
}

.accordion {
    display: flex;
    width: 100%;
    cursor: pointer;
    position: relative;
}

.accordion-text {
    margin-left: 1rem;
    padding-right: 1.3rem;
    color: #CCAB67;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    &.expand {
        color: #EBC76E;
    }
}

.accordion-indent {
    position: absolute;
    left: 0;
    top: 5px;
    background: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
    width: 3px;
    height: 9px;
}

.accordion-panel {
    padding: 0 18px;
    background-color: transparent;
    overflow: hidden;

    .open {
        max-height: 5000px;
        /* Fully expand */
        transition: max-height 0.5s ease;
    }

    .close {
        max-height: 4.5rem;
        /* Equivalent to 3 lines */
        overflow: hidden;
        position: relative;
        transition: max-height 0.5s ease;
    }

    /* Add the fade shadow */
    .close::after {
        content: '';
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.5rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        pointer-events: none;
    }

    /* Remove the fade shadow when expanded */
    .open::after {
        display: none;
    }

    /* Remove the arrow in the summary */
    summary {
        list-style: none;
        cursor: pointer;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary::marker {
        display: none;
    }

    h4 {
        margin: 0.5rem 0 0.5rem 0;
    }
}

.accordion-panel-content {
    color: #D9D9D9;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    // -webkit-line-clamp: 3;
    /* Limit to 3 lines */
    transition: -webkit-line-clamp 0.5s ease;
}
</style>
