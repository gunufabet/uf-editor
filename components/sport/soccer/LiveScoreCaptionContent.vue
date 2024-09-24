<template>
    <div class="aside-content">
        <table>
            <caption style="display: block;" class="aside-content-title"> {{ props.asideTitleText }}</caption>
        </table>
        <strong class="aside-content-detail" :class="openPanel ? 'open' : 'close'" @click="clickDetail"> {{
                props.asideContentText }}</strong>
    </div>
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
        color: #EBC76E;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: left;
        margin-top: 20px;
    }

    &-detail {
        font-size: 10px;
        margin: 0.5rem 0.1rem 0.5rem .1rem;
        // line-height: 24px;
        line-height: 16px;
        font-weight: 300;

        color: #D9D9D9;
        text-align: left;
        /* Limit the height to 320px */
        // max-height: 320px;
        /* Hide content that exceeds the max-height */
        overflow: hidden;
        /* Position relative for the pseudo-element */
        position: relative;
    }

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