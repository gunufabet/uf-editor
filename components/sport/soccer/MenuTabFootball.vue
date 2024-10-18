<template>
    <accordion-h2-style-2 v-if="sportsContent?.design === '2'" style="margin-top: 1rem;"
        :section-title="sportsContent?.title" :section-content="sportsContent?.content"
        :h3-content-data="sportsContent?.contentListH3" @openPanel="clickOpenPanel">
    </accordion-h2-style-2>

    <accordion-h2-style-1 v-else style="margin-top: 1rem;" :section-title="sportsContent?.title"
        :section-content="sportsContent?.content" :h3-content-data="sportsContent?.contentListH3"
        @openPanel="clickOpenPanel">
    </accordion-h2-style-1>

    <div v-if="openPanel" style="padding-top: 2rem;"></div>
    <sport-soccer-bet-boost v-if="sportsContent?.showBetBoost && openPanel"></sport-soccer-bet-boost>
    
    <sport-soccer-news-section v-if="openPanel"></sport-soccer-news-section>
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());
const sportsContent = ref(content.value.Sport.Soccer.sectionWithMenu2.menuContent.find(
    (content) => content.menuTabId === 'football'
));

const openPanel = ref(false);

function clickOpenPanel() {
    openPanel.value = !openPanel.value    
}
</script>