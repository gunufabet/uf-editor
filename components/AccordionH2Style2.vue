<template>
    <details class="accordion-panel" :open="true">
        <summary @click.prevent="false" @click="clickPanel">
            <h2 class="accordion">
                <span class="accordion-text">{{ props.sectionTitle }}</span>
                <span class="accordion-icn" :class="openPanel ? 'flip-vertical' : 'flip-vertical-transition'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <circle cx="11.5" cy="11.5" r="11.5" transform="matrix(1 0 0 -1 0 23.5)" fill="#EBC76E"
                            fill-opacity="0.2" />
                        <path d="M15 13.5L11.5 9.5L8 13.5" stroke="#EBC76E" stroke-width="1.5" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <div class="accordion-indent"></div>
            </h2>
        </summary>
        <!-- Content with shadow effect -->
        <p class="accordion-panel-content" v-html="props.sectionContent" @click="clickPanel"
            :class="openPanel ? 'open' : 'close'"></p>

        <sport-soccer-league-table-summary v-if="openPanel && showLeagueTable"
            :league-id="leagueId"></sport-soccer-league-table-summary>

        <sport-soccer-league-schedule v-if="openPanel && showFixture" :league-id="leagueId"
            :league-id-cigapi="leagueId_cigapi"></sport-soccer-league-schedule>

        <table-summary v-if="openPanel && sectionContentTableHeader" :tableHeader="sectionContentTableHeader"
            :tableContent="sectionContentTableContent"></table-summary>

        <p v-if="openPanel" class="accordion-panel-content" v-html="props.sectionContent2"></p>

        <div v-if="openPanel" v-for="(item, index) in h3ContentData" :key="index">
            <accordion-h3-style-2 v-if="item.design === '2'" style="margin-left: 1rem; margin-bottom: 30px;"
                :section-title="item.title" :section-content="item.content" :with-break-line="false"
                :h4ContentData="item.contentListH4" :defaultOpenPanel="item.defaultOpen"></accordion-h3-style-2>

            <accordion-h3 v-else style="margin-top: 1rem;" :section-title="item.title" :section-content="item.content"
                :h4ContentData="item.contentListH4" :with-break-line="item.designWithUnderline"
                :defaultOpenPanel="item.defaultOpen"></accordion-h3>
        </div>
        <loading v-if="showLoading"></loading>
    </details>
</template>

<script setup lang="ts">
const props = defineProps({
    sectionTitle: {
        type: String,
        default: ''
    },
    sectionContent: {
        type: String,
        default: ''
    },
    sectionContent2: {
        type: String,
        default: ''
    },
    h3ContentData: {
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
    },
    showLeagueTable: {
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
    defaultOpenPanel: {
        type: Boolean,
        default: false
    },
    showLoading: {
        type: Boolean,
        default: false
    },
    showFixture: {
        type: Boolean,
        default: false
    }
});

const openPanel = ref(props.defaultOpenPanel || false);

const emit = defineEmits(['openPanel'])

function clickPanel() {
    openPanel.value = !openPanel.value;
    emit('openPanel')
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
    color: #EBC76E;
    font-size: 24px;
    font-weight: 400;
}

.accordion-indent {
    position: absolute;
    left: 0;
    top: 5px;
    background: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
    width: 5px;
    height: 18px;
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

.flip-vertical {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.flip-vertical-transition {
    transition: transform 0.3s ease;
}

.accordion-icn {
    display: flex;
    position: absolute;
    right: 0;
    // left: 0;
    top: 1px;
}
</style>
