<template>
    <aside class="banner-container">
        <div class="banner-container-wrapper">
            <div class="banner-container-img">
                <img class="banner-container-img-item" :alt="imgAlt" :srcset="`${imgSrcMobile} 480w, 
                    ${imgSrc} 800w, ${imgSrc} 1200w`" :src="imgSrc">
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
const props = defineProps({
    imgSrc: {
        type: String,
        default: ''
    },
    imgSrcMobile: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.banner-container {
    display: flex;
    align-items: center;
    justify-content: center;

    &-img {
        border-radius: 10px;

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
        border-radius: 8px;
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
                max-width: 356px;
                max-height: 165.07px;
            }
        }
    }
}
</style>