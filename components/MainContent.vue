<template>
    <header>
        <main class="main-content">
            <h1 class="main-content-title">{{ props.mainTitleText }}</h1>
            <p class="main-content-detail" v-html="props.mainContentText">
            </p>
        </main>
    </header>
</template>

<script setup lang="ts">
const props = defineProps({
    mainTitleText: {
        type: String,
        default: ''
    },
    mainContentText: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.main-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem 0 1rem;

    &-title {
        // color: linear-gradient(208deg, #8B6832 28.09%, #FCDD9A 50.01%, #966B2A 70.61%);
        font-weight: 500;
        font-size: 46px;
        text-align: center;
        margin-top: 20px;
        background: linear-gradient(208deg, #8B6832 28.09%, #FCDD9A 50.01%, #966B2A 70.61%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &-detail {
        margin: 0.5rem 0 0.5rem 0;
        line-height: 24px;
        font-weight: 300;

        color: #D9D9D9;
        text-align: left;
        /* Limit the height to 320px */
        max-height: 320px;
        /* Hide content that exceeds the max-height */
        overflow: hidden;
        /* Position relative for the pseudo-element */
        position: relative;
    }

    &-detail::after {
        /* Required for pseudo-element */
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        /* Height of the fade effect */
        height: 40px;
        /* Adjust color to match background */
        background: linear-gradient(rgba(0, 0, 0, 0), #000);
        /* Ensure the overlay does not interfere with text selection */
        pointer-events: none;
    }
}

// @media only screen and (max-width:475px) {
//     .section-content {

//         &-sub-title {
//             font-size: 28px;
//         }
//     }
// }</style>