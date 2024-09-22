<template>
    <div class="accordion-wrapper">
        <h3 class="accordion" @click="clickPanel">
            <span class="accordion-text">{{ props.sectionTitle }}</span>
            <span class="accordion-icn" :class="openPanel ? 'flip-vertical' : 'flip-vertical-transition'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path
                        d="M10.8483 7.27735L2.18804 12.2327C1.34807 12.7127 0.361876 11.884 0.691872 10.9747L2.35491 6.37368L0.691872 1.77261C0.361876 0.861353 1.34807 0.0345403 2.18804 0.514507L10.8483 5.46991C11.5495 5.86927 11.5476 6.87798 10.8483 7.27735Z"
                        fill="url(#paint0_linear_869_1793)" />
                    <defs>
                        <linearGradient id="paint0_linear_869_1793" x1="9.97171" y1="1.85179" x2="0.875022" y2="9.45304"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8B6832" />
                            <stop offset="0.515625" stop-color="#FCDD9A" />
                            <stop offset="1" stop-color="#966B2A" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        </h3>
        
        <div class="accordion-break-line"></div>

        <div v-if="openPanel" class="accordion-panel">
            <p class="accordion-panel-content" :class="openPanel ? 'open' : 'close'">{{ props.sectionContent }}</p>
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
    // margin: 0 1rem 0 1rem;
    margin: 0 1rem 0 0;
}

.accordion {
    display: flex;
    width: 100%;
    // padding: 0.5rem 0 0.5rem 0;
    padding: 0.5rem 0 0 0;
    cursor: pointer;
    position: relative;
}

.accordion-break-line {    
    border-bottom: 1px solid #ddd;    
    border-bottom-color: rgba(132, 107, 45, 0.52);
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.accordion-text {
    color: #CCAB67;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-left: 2.5rem;
}

.accordion-icn {
    display: flex;
    position: absolute;
    left: 1rem;
    top: 0.7rem;
}

.flip-vertical {
    transition: transform 0.3s ease;
    transform: rotate(90deg);
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
    margin-bottom: 1rem;
}
</style>