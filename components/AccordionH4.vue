<template>
    <div class="accordion-wrapper">
        <h4 class="accordion" @click="clickPanel">
            <span class="accordion-text">{{ props.sectionTitle }}</span>
            <span class="accordion-icn" :class="openPanel ? 'flip-vertical' : 'flip-vertical-transition'">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M8 1.5L4.5 5L1 1.5" stroke="#CCAB67" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </h4>
        <div v-if="openPanel" class="accordion-panel">
            <p class="accordion-panel-content" :class="openPanel ? 'open' : 'close'" v-html="props.sectionContent"></p>
        </div>
    </div>
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
.accordion-wrapper {
    margin: 0 1rem 0 1rem;
}

.accordion {
    display: flex;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(235, 199, 110, 0.20) 0%, rgba(133, 113, 62, 0.20) 100%);
    cursor: pointer;
    position: relative;
}

.accordion-text {
    color: #CCAB67;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-left: 2rem;
}

.accordion-icn {
    display: flex;
    position: absolute;
    // right: 1rem;
    left: 1rem;
    top: 0.8rem;
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
    }

    .close {
        display: none;
    }
}

.accordion-panel-content {
    color: #D9D9D9;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
}
</style>