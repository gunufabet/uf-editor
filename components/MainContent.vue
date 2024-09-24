<template>
    <main class="main-content">
        <h1 id="main-content-title" class="main-content-title">{{ props.mainTitleText }}</h1>
        <p class="main-content-detail" :class="[
            showMore ? 'main-content-detail-open' : 'main-content-detail-close',
            { 'remove-after': showMore }
        ]" v-html="props.mainContentText">
        </p>
    </main>
    <a id="show-more" @click="clickShowMore" tabindex="0">{{ showMore ? 'Show Less' : 'Show More' }}</a>
</template>

<script setup lang="ts">
const showMore = ref(false);

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

function clickShowMore() {
    showMore.value = !showMore.value

    if (!showMore.value) {
        const element = document.getElementById("main-content-title");
        if (element) {
            // element.focus();
            element.focus({ preventScroll: true }); // Focus the element
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
}
</script>

<style lang="scss" scoped>
.main-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem 0 1rem;

    &-title {
        font-weight: 500;
        font-size: 46px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 30px;
        background: linear-gradient(208deg, #8B6832 28.09%, #FCDD9A 50.01%, #966B2A 70.61%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &-detail {        
        line-height: 24px;
        font-weight: 300;

        color: #D9D9D9;
        text-align: left;
        /* Limit the height to 320px */
        max-height: 100px;
        /* Hide content that exceeds the max-height */
        overflow: hidden;
        /* Position relative for the pseudo-element */
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: linear-gradient(rgba(0, 0, 0, 0), #000);
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
    }
}

/* New class to remove the fade effect when expanded */
.remove-after::after {
    display: none;
}

.main-content-detail-open {
    max-height: 5000px;
    /* Fully expand */
    transition: max-height 1s ease;
}

.main-content-detail-close {
    max-height: 4.5rem;
    /* Equivalent to 3 lines */
    overflow: hidden;
    position: relative;
    transition: max-height 0.5s ease;
}

#show-more {
    display: block;
    cursor: pointer;
    color: #EBC76E;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-top: 1rem;
}
</style>