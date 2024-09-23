<template>
    <main class="main-content">
        <h1 class="main-content-title">{{ props.mainTitleText }}</h1>
        <p id="main-content-detail" class="main-content-detail" v-html="props.mainContentText"></p>
    </main>
    <a id="show-more">Show More</a>
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

onMounted(() => {
    var button = document.getElementById("show-more");
    button?.addEventListener("click", showMoreContent);
})

function showMoreContent(event: any) {
    var content = document.getElementById("main-content-detail");
    var button = document.getElementById("show-more");

    if (content) {
        if (content.className == "open") {
            //shrink the box
            content.className = "close";
            if (button) {
                button.innerHTML = "Show More";
            }

            // Scroll to the title when collapsing the content
            if (content) {
                content.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            //expand the box
            content.className = "open";
            if (button) {
                button.innerHTML = "Show Less";
            }
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
        // margin: 0.5rem 0 0.5rem 0;
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
    }

    &-detail::after {
        /* Required for pseudo-element */
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        /* Height of the fade effect */
        // height: 40px;
        height: 40px;
        /* Adjust color to match background */
        background: linear-gradient(rgba(0, 0, 0, 0), #000);
        /* Ensure the overlay does not interfere with text selection */
        pointer-events: none;
        transition: opacity 0.3s ease;
        /* Smooth transition for the fade-out */
    }
}

#main-content-detail {
    max-height: 180px;
    overflow: hidden;
    // transition: max-height 0.5s;
    line-height: 24px;
    font-weight: 300;
    color: #D9D9D9;
    text-align: left;
}

#main-content-detail::after {
    /* Required for pseudo-element */
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* Height of the fade effect */
    height: 60px;
    /* Adjust color to match background */
    background: linear-gradient(rgba(0, 0, 0, 0), #000);
    /* Ensure the overlay does not interfere with text selection */
    pointer-events: none;
}

#main-content-detail.open {
    max-height: 100%;
    // transition: max-height 0.7s;
}

#main-content-detail.open::after {
    opacity: 0;
    /* Makes the fade effect fully transparent when expanded */
    height: 0;
    /* Ensures the pseudo-element doesn’t take up space */
    transition: opacity 0.3s ease, height 0s 0.3s;
    /* Delays height change after fade */
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

.main-content-title {
    margin-bottom: 1.5rem;
}
</style>