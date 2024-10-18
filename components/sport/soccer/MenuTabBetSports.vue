<template>
    <accordion-h2-style-1 v-if="betSportsContent?.design === '1'" style="margin-top: 1rem;"
        :section-title="betSportsContent?.title" :section-content="betSportsContent?.content"
        :section-content-2="betSportsContent?.content2" :h3-content-data="betSportsContent?.contentListH3"
        :sectionContentTableHeader="betSportsContent?.contentTable?.header"
        :sectionContentTableContent="betSportsContent?.contentTable?.content">
    </accordion-h2-style-1>

    <accordion-h2-style-2 v-if="betSportsContent?.design === '2'" style="margin-top: 1rem;"
        :section-title="betSportsContent?.title" :section-content="betSportsContent?.content"
        :section-content-2="betSportsContent?.content2" :h3-content-data="betSportsContent?.contentListH3"
        :sectionContentTableHeader="betSportsContent?.contentTable?.header"
        :sectionContentTableContent="betSportsContent?.contentTable?.content">
    </accordion-h2-style-2>
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());

const betSportsContent = ref(content.value.Sport.Soccer.sectionWithMenu1.menuContent.find(
    (content) => content.menuTabId === 'sport'
));
</script>

<style lang="scss" scoped>
.hot-match-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>