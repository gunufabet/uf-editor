<template>
    <aside-content :aside-title-text="asideTitleText" :aside-content-text="asideContentText"></aside-content>

    <div class="img-wrapper">
        <bonus-banner :img-src="bonusImgSrc" :img-alt="bonusImgAlt"></bonus-banner>
    </div>
</template>

<script setup lang="ts">
import content from '~/assets/script/content.json'

const bonusSection = ref(content.Sport.Soccer.sectionBonus);
const asideTitleText = ref(bonusSection.value.title);
const asideContentText = ref(bonusSection.value.content);
const bonusImgSrc = ref(bonusSection.value.imgSrc);
const bonusImgAlt = ref(bonusSection.value.imgAlt);
</script>

<style lang="scss" scoped>
.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    // gap: 0.5rem;
    // margin: 0 1rem 0 1rem;
}
</style>