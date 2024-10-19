<template>
    <div class="game-container">
        <div v-for="(item, index) in imgList" :key="index">
            <img class="game-container-img-item" :alt="item.imgAlt"
                :srcset="`${item.imgSrc} 480w, ${item.imgSrc} 800w, ${item.imgSrc} 1200w`" :src="item.imgSrc"
                loading="lazy" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    imgList: {
        type: Array,
        default: []
    }
});
</script>

<style lang="scss" scoped>
.game-container {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    max-width: 800px;
    /* Optional: Limit the width of the banner container */
    margin: 0 auto;
    /* Center the container */
}

.game-container {
    &-img {
        &-item {
            max-width: 112px;
            max-height: 108px;
        }
    }
}

@media only screen and (max-width:475px) {
    .game-container {
        grid-template-columns: repeat(3, 1fr);
        // max-width: 100%
    }

    .game-container {
        &-img {
            &-item {
                max-width: 112px;
                max-height: 108px;
            }
        }
    }
}
</style>