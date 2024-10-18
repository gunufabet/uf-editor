<template>
    <details class="accordion-panel disabled" :open="true" :class="addPadding ? 'accordion-h2-add-padding' : ''">
        <summary @click.prevent="false">
            <h2 class="accordion">
                <span class="accordion-text">{{ props.sectionTitle }}</span>
                <div v-if="props.sectionTitle" class="accordion-indent"></div>
            </h2>
        </summary>
        <!-- Content with shadow effect -->
        <p class="accordion-panel-content" v-html="props.sectionContent" @click="clickPanel"
            :class="openPanel ? 'open' : 'close'"></p>

        <table-summary v-if="openPanel && sectionContentTableHeader" :tableHeader="sectionContentTableHeader"
            :tableContent="sectionContentTableContent"></table-summary>

        <p v-if="openPanel" class="accordion-panel-content" v-html="props.sectionContent2"></p>

        <div v-if="openPanel" v-for="(item, index) in h3ContentData" :key="index">
            <accordion-h3-style-2 v-if="item.design === '2'" style="margin-left: 1rem; margin-bottom: 30px;"
                :section-title="item.title" :section-content="item.content" :with-break-line="false"
                :h4ContentData="item.contentListH4"></accordion-h3-style-2>

            <accordion-h3 v-else style="margin-top: 1rem;" :section-title="item.title" :section-content="item.content"
                :h4ContentData="item.contentListH4" :with-break-line="item.designWithUnderline"></accordion-h3>
        </div>

        <div v-if="openPanel" v-for="(item, index) in h4ContentData" :key="index">
            <accordion-h4-style-2 v-if="item.design === '2'" style="margin-bottom: 1rem;" :section-title="item.title"
                :section-content="item.content" :with-break-line="false"
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
    sectionContent2: {
        type: String,
        default: ''
    },
    addPadding: {
        type: Boolean,
        default: true
    },
    h3ContentData: {
        type: Array,
        default: []
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
    font-size: 16px;
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

.accordion-h2-add-padding {
    padding: 0 18px;
}
</style>
