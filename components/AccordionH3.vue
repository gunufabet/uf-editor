<template>
    <details class="accordion-panel" :open="true">
        <summary @click.prevent="false" @click="clickPanel">
            <h3 class="accordion">
                <span class="accordion-text" :class="openPanel ? 'expand' : ''" v-html="props.sectionTitle"></span>
                <span class="accordion-icn" :class="openPanel ? 'flip-vertical' : 'flip-vertical-transition'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path
                            d="M10.2218 6.90381L1.56157 11.8592C0.721605 12.3392 -0.264589 11.5105 0.0654067 10.6012L1.72844 6.00014L0.0654067 1.39907C-0.264589 0.487817 0.721605 -0.338995 1.56157 0.140972L10.2218 5.09637C10.923 5.49574 10.9212 6.50445 10.2218 6.90381Z"
                            fill="url(#paint0_linear_866_1524)" />
                        <defs>
                            <linearGradient id="paint0_linear_866_1524" x1="9.34524" y1="1.47826" x2="0.248557"
                                y2="9.07951" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8B6832" />
                                <stop offset="0.515625" stop-color="#FCDD9A" />
                                <stop offset="1" stop-color="#966B2A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </h3>
            <div v-if="withBreakLine" class="accordion-break-line"></div>
        </summary>
        <!-- Content with shadow effect -->
        <p class="accordion-panel-content" :class="openPanel ? 'accordion-h3-open' : 'accordion-h3-close'"
            v-html="props.sectionContent"></p>

        <div v-if="openPanel" v-for="(item, index) in h4ContentData" :key="index">
            <accordion-h4-style-2 v-if="item.design === '2'" style="margin-bottom: 1rem;"
                :section-title="item.title" :section-content="item.content" :with-break-line="false"
                :sectionContentTableHeader="item.contentTable?.header"
                :sectionContentTableContent="item.contentTable?.content"
                :show-running-match-table-list="item.showRunningMatchTableList"
                :show-running-match-list="item.showRunningMatchList" :league-id="item.leagueId"
                :league-id-cigapi="item.leagueId_cigapi"></accordion-h4-style-2>

            <accordion-h4 v-else :section-title="item.title" :section-content="item.content"
                :sectionContentTableHeader="item.contentTable?.header"
                :sectionContentTableContent="item.contentTable?.content"
                :show-running-match-table-list="item.showRunningMatchTableList"
                :show-running-match-list="item.showRunningMatchList" :league-id="item.leagueId"
                :league-id-cigapi="item.leagueId_cigapi"></accordion-h4>
        </div>
    </details>
</template>

<script setup lang="ts">
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
    withBreakLine: {
        type: Boolean,
        default: false
    },
    defaultOpenPanel: {
        type: Boolean,
        default: false
    },
    h4ContentData: {
        type: Array,
        default: []
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

async function clickPanel() {
    openPanel.value = !openPanel.value;
}

onMounted(() => {
    openPanel.value = props.defaultOpenPanel;
})
</script>

<style lang="scss" scoped>
.accordion {
    display: flex;
    width: 100%;
    cursor: pointer;
    position: relative;
}

.accordion-text {
    margin-left: 2.3rem;
    padding-right: 1.3rem;
    color: #CCAB67;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    &.expand {
        color: #EBC76E;
    }
}

.accordion-panel {
    margin: 0 1rem 0 0;
    background-color: transparent;
    overflow: hidden;

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

    h3 {
        margin: 0.5rem 0 0.5rem 0;
    }
}

.accordion-panel-content {
    color: #D9D9D9;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    margin-left: 2.3rem;
    margin-right: 1rem;
    overflow: hidden;
}

.flip-vertical {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.flip-vertical-transition {
    transition: transform 0.3s ease;
}

.accordion-icn {
    display: flex;
    position: absolute;
    left: 1rem;
    // left: 0;
    top: 3px;
}

.accordion-break-line {
    border-bottom: 1px solid #ddd;
    border-bottom-color: rgba(132, 107, 45, 0.52);
    margin-left: 1rem;
    // margin-bottom: 1.5rem;
    margin-top: 1.5rem;
}

.accordion-h3-open {
    max-height: 5000px;
    transition: max-height 1s ease;
}

.accordion-h3-close {
    transition: max-height 0.5s ease;
    max-height: 0;
    overflow: hidden;
}
</style>
