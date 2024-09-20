<template>
    <div class="aside-content">
        <table>
            <caption style="display: block;" class="aside-content-title"> {{ props.asideTitleText }}</caption>
        </table>
        <strong class="aside-content-detail"
            :class="sectionContentDetailTruncate ? 'aside-content-detail-truncate' : ''" @click="clickDetail"> {{
                props.asideContentText }}</strong>
    </div>
</template>

<script setup lang="ts">
const sectionContentDetailTruncate = ref(true);

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
    sectionContentDetailTruncate.value = !sectionContentDetailTruncate.value;
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

    // &-detail::after {
    //     /* Required for pseudo-element */
    //     content: '';
    //     position: absolute;
    //     bottom: 0;
    //     left: 0;
    //     width: 100%;
    //     /* Height of the fade effect */
    //     height: 40px;
    //     /* Adjust color to match background */
    //     background: linear-gradient(rgba(0, 0, 0, 0), #000);
    //     /* Ensure the overlay does not interfere with text selection */
    //     pointer-events: none;
    // }
}

.aside-content-detail-truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-top: 0.5rem;
}
</style>