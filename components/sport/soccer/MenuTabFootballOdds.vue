<template>
    <br>
    <accordion-h2 :section-title="sportsContent?.section1?.titleH2"
        :section-content="sportsContent?.section1?.contentH2">
    </accordion-h2>

    <accordion-h3-style-2 style="margin-left: 1rem;" v-for="(item, index) in sportsContent?.section1?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h3-style-2>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import content from '~/assets/script/contentSoccer.json'
const sportsContent = ref(content.sectionWithMenu1.menuContent.find(
    (content) => content.menuTabId === 'football-odds'
));

</script>