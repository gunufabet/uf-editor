<template>
    <details class="accordion-panel">
        <summary>
            <h2 class="accordion" @click="clickPanel">
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
        <p class="accordion-panel-content" v-html="props.sectionContent" :class="openPanel ? 'open' : 'close'"></p>
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
    }
});

function clickPanel() {
    openPanel.value = !openPanel.value;
}
</script>

<style lang="scss" scoped>
.accordion {
    display: flex;
    width: 100%;
    // padding: 0.5rem 0 0.5rem 0;
    // border-radius: 5px;
    // background: linear-gradient(90deg, rgba(235, 199, 110, 0.20) 0%, rgba(133, 113, 62, 0.20) 100%);
    cursor: pointer;
    position: relative;
}

.accordion-text {
    margin-left: 1rem;
    padding-right: 1.3rem;

    color: #EBC76E;
    font-family: Prompt;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.accordion-icn {
    display: flex;
    position: absolute;
    right: 0;
    // left: 0;
    top: 1px;
}

.accordion-indent {
    position: absolute;
    // right: 0;
    left: 0;
    top: 5px;
    background: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
    width: 5px;
    height: 18px;
}

.flip-vertical {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.flip-vertical-transition {
    transition: transform 0.3s ease;
}

.accordion-panel {
    padding: 0 18px;
    display: none;
    display: block;
    background-color: transparent;
    overflow: hidden;

    .open {
        display: block;
        max-height: 1000px;
        transition: max-height 2s;
    }

    .close {
        display: none;
        max-height: 0;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    // background-color: #eeeeee;
    // transition: max-height 0.5s ease, opacity 0.5s ease;
    transition: max-height 2s;
}
</style>