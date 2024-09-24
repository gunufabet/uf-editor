<template>
    <aside class="aside-content">
        <h2 class="aside-content-title">{{ props.asideTitleText }}</h2>
        <p class="aside-content-detail" :class="openPanel ? 'open' : 'close'" @click="clickDetail"
            v-html="props.asideContentText">
        </p>
    </aside>
</template>

<script setup lang="ts">
const openPanel = ref(false);

const props = defineProps({
    asideTitleText: {
        type: String,
        default: ''
    },
    asideContentText: {
        type: String,
        default: ''
    }
});

function clickDetail() {
    openPanel.value = !openPanel.value;
}
</script>

<style lang="scss" scoped>
.aside-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0 1rem 0 1rem;

    &-title {
        color: linear-gradient(208deg, #8B6832 28.09%, #FCDD9A 50.01%, #966B2A 70.61%);
        font-weight: 500;
        font-size: 24px;
        text-align: left;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    &-detail {
        font-size: 14px;
        // margin: 0.5rem 0 0.5rem 0;
        margin: 0 0 0.5rem 0;
        line-height: 24px;
        font-weight: 300;

        color: #D9D9D9;
        text-align: left;
        /* Limit the height to 320px */
        // max-height: 320px;
        /* Hide content that exceeds the max-height */
        overflow: hidden;
        /* Position relative for the pseudo-element */
        position: relative;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        // -webkit-line-clamp: 3;
        /* Limit to 3 lines */
        transition: -webkit-line-clamp 0.5s ease;
    }

    .open {
        max-height: 1000px;
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
}
</style>