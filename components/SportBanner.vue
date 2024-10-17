<template>
    <aside class="banner-container">
        <div class="banner-container-wrapper">
            <div class="banner-container-img">
                <img class="banner-container-img-item" :alt="content.Sport.Soccer.advertisementBanner[0].imgAlt"
                    :srcset="`${content.Sport.Soccer.advertisementBanner[0].imgSrcMobile} 480w, 
                    ${content.Sport.Soccer.advertisementBanner[0].imgSrc} 800w, ${content.Sport.Soccer.advertisementBanner[0].imgSrc} 1200w`"
                    :src="content.Sport.Soccer.advertisementBanner[0].imgSrc">
                <img class="banner-container-img-item" :alt="content.Sport.Soccer.advertisementBanner[1].imgAlt"
                    :srcset="`${content.Sport.Soccer.advertisementBanner[1].imgSrcMobile} 480w, 
                    ${content.Sport.Soccer.advertisementBanner[1].imgSrc} 800w, ${content.Sport.Soccer.advertisementBanner[1].imgSrc} 1200w`"
                    :src="content.Sport.Soccer.advertisementBanner[1].imgSrc">
            </div>
        </div>
    </aside>

    <!-- <div class="banner-button-container">
        <div class="banner-button-container-item"></div>
        <div class="banner-button-container-item" style="opacity: 0.5;"></div>
    </div> -->
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());
</script>

<style lang="scss" scoped>
.banner-container {
    display: flex;
    // padding: 1rem 1rem 0 1rem;
    // width: 100%;
    // overflow-x: scroll;
    align-items: center;
    justify-content: center;
    text-align: center;

    &-wrapper {
        // white-space: nowrap;
        // width: fit-content;
        // display: flex;
    }

    &-img {


        &-item {
            cursor: pointer;
            max-width: 541px;
            max-height: 266px;
            margin: 0.5rem;
            border-radius: 10px;
        }
    }
}

.banner-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &-item {
        margin: 0.5rem;
        width: 10px;
        height: 10px;
        background: #EBC76E;
        border-radius: 6px;
        cursor: pointer;
    }
}

@media only screen and (max-width:475px) {
    .banner-button-container {

        &-item {
            margin: 0.3rem;
            width: 8px;
            height: 8px;
        }
    }

    .banner-container {
        &-img {
            &-item {
                max-width: 174px;
                max-height: 101px;
            }
        }
    }
}
</style>