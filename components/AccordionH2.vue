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
    addPadding: {
        type: Boolean,
        default: true
    },
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
    color: #EBC76E;
    font-size: 24px;
    font-weight: 400;
    // line-height: 2rem;
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
