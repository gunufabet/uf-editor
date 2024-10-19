<template>
    <aside-content :key="asideTitleText" :aside-title-text="asideTitleText"
        :aside-content-text="asideContentText"></aside-content>

    <aside class="banner-container">
        <div class="" v-for="(item, index) in bonusSection?.imgList" :key="index">
            <img class="banner-container-img-item" :alt="item.imgAlt"
                :srcset="`${item.imgSrc} 480w, ${item.imgSrc} 800w, ${item.imgSrc} 1200w`" :src="item.imgSrc"
                loading="lazy" />
        </div>
    </aside>
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());

const bonusSection = ref(content.value.Sport.Soccer.sectionBonus);
const asideTitleText = ref(bonusSection.value.title);
const asideContentText = ref(bonusSection.value.content);
</script>

<style lang="scss" scoped>
.banner-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 800px; /* Optional: Limit the width of the banner container */
    margin: 0 auto; /* Center the container */
}

.banner-container {
    &-img {
        &-item {
            max-width: 356px;
            max-height: 165.07px;
        }
    }
}

@media only screen and (min-width:475px) {
    .banner-container {
        grid-template-columns: repeat(2, 1fr);
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