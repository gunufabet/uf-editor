<template>
    <br>
    <accordion-h2 :section-title="sportsContent?.section1?.titleH2"
        :section-content="sportsContent?.section1?.contentH2">
    </accordion-h2>
    
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in sportsContent?.section1?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="false">
    </accordion-h3>

    <br>
    <accordion-h2 :section-title="sportsContent?.section2?.titleH2"
        :section-content="sportsContent?.section2?.contentH2">
    </accordion-h2>

    <br>
    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in sportsContent?.section2?.contentListH3"
        :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true">
    </accordion-h3>

    <accordion-h4 style="margin-left: 1rem;" v-for="(item, index) in sportsContent?.section2?.contentListH4"
        :key="index" :section-title="item.title" :section-content="item.content">
    </accordion-h4>
</template>

<script setup lang="ts">
import type { SportSubContent, SportSubContentList } from "~/types/strapi-model";
import { getContentSoccer } from '@/composables/generalUtil'
const content = ref(getContentSoccer());
const sportsContent = ref(content.value.sectionWithMenu1.menuContent.find(
    (content) => content.menuTabId === 'football-betting'
));

</script>