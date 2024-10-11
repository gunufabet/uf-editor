<template>
    <main class="main-content">
        <h1 id="main-content-title" class="main-content-title">{{ props.mainTitleText }}</h1>
        <p class="main-content-detail" :class="[
            showMore ? 'main-content-detail-open' : 'main-content-detail-close',
            { 'remove-after': showMore }
        ]" v-html="props.mainContentText">
        </p>
    </main>
    <a id="show-more" :class="showMore ? 'flip-vertical' : 'flip-vertical-transition'" @click="clickShowMore"
        tabindex="0">
        <!-- {{ showMore ? 'Show Less' : 'Show More' }} -->
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
                d="M14.8247 24.8248L22.9913 16.6582C23.2039 16.4381 23.3215 16.1434 23.3188 15.8375C23.3161 15.5316 23.1934 15.239 22.9771 15.0227C22.7608 14.8064 22.4682 14.6837 22.1623 14.681C21.8564 14.6784 21.5617 14.796 21.3417 15.0085L15.1665 21.1837L15.1665 3.66667C15.1665 3.35725 15.0436 3.0605 14.8248 2.84171C14.606 2.62292 14.3093 2.5 13.9999 2.5C13.6904 2.5 13.3937 2.62292 13.1749 2.84171C12.9561 3.0605 12.8332 3.35725 12.8332 3.66667L12.8332 21.1837L6.65802 15.0085C6.5504 14.8971 6.42166 14.8082 6.27932 14.747C6.13699 14.6859 5.98389 14.6537 5.82898 14.6524C5.67408 14.651 5.52045 14.6805 5.37707 14.7392C5.23369 14.7979 5.10343 14.8845 4.99389 14.994C4.88435 15.1036 4.79772 15.2338 4.73906 15.3772C4.6804 15.5206 4.65088 15.6742 4.65222 15.8291C4.65357 15.984 4.68576 16.1371 4.7469 16.2795C4.80804 16.4218 4.89692 16.5505 5.00835 16.6582L13.175 24.8248C13.3938 25.0436 13.6905 25.1664 13.9998 25.1664C14.3092 25.1664 14.6059 25.0436 14.8247 24.8248Z"
                fill="#EBC76E" />
        </svg>
    </a>
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
        // margin-top: 50px;
        // margin-bottom: 30px;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
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
}

.flip-vertical {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
    margin-top: 1rem;
}

.flip-vertical-transition {
    transition: transform 0.3s ease;    
}
</style>