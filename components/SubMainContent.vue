<template>
    <section :id="props.sectionTitle">
        <accordion-h2 v-if="props.sectionTitle" :section-title="props.sectionTitle"
            :section-content="props.sectionContent" :add-padding="false">
        </accordion-h2>

        <table-summary :tableHeader="sectionContentH2TableHeader"
            :tableContent="sectionContentH2TableContent"></table-summary>

        <accordion-h3 v-for="(item, index) in props.sectionSubContent" :key="index" :section-title="item.title"
            :section-content="item.content" :with-break-line="false">
        </accordion-h3>

        <accordion-h3-style-2 v-if="props.sectionTitleH3" :section-title="props.sectionTitleH3"
            :section-content="props.sectionContentH3" :with-break-line="false">
        </accordion-h3-style-2>

        <table-summary :tableHeader="sectionContentH3TableHeader"
            :tableContent="sectionContentH3TableContent"></table-summary>

        <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in props.sectionSubContentH3" :key="index"
            :section-title="item.title" :section-content="item.content" :with-break-line="false">
        </accordion-h3>

        <accordion-h4-style-2 style="margin-left: 1rem;" v-if="props.sectionTitleH4"
            :section-title="props.sectionTitleH4" :section-content="props.sectionContentH4" :with-break-line="false">
        </accordion-h4-style-2>

        <table-summary :tableHeader="sectionContentH4TableHeader"
            :tableContent="sectionContentH4TableContent"></table-summary>

        <accordion-h3 style="margin-left: 2rem;" v-for="(item, index) in props.sectionSubContentH4" :key="index"
            :section-title="item.title" :section-content="item.content" :with-break-line="false">
        </accordion-h3>
    </section>
</template>

<script setup lang="ts">
import { type PropType } from "@vue/runtime-core";
import type { SportSubContent } from "~/types/strapi-model";

const sectionContentDetailTruncate = ref(true);

const props = defineProps({
    sectionTitle: {
        type: String,
        default: ''
    },
    sectionContent: {
        type: String,
        default: ''
    },
    sectionSubContent: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    },
    sectionTitleH3: {
        type: String,
        default: ''
    },
    sectionContentH3: {
        type: String,
        default: ''
    },
    sectionSubContentH3: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    },
    sectionTitleH4: {
        type: String,
        default: ''
    },
    sectionContentH4: {
        type: String,
        default: ''
    },
    sectionSubContentH4: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    },
    sectionContentH2TableHeader: {
        type: Array,
        default: []
    },
    sectionContentH2TableContent: {
        type: Array,
        default: []
    },
    sectionContentH3TableHeader: {
        type: Array,
        default: []
    },
    sectionContentH3TableContent: {
        type: Array,
        default: []
    },
    sectionContentH4TableHeader: {
        type: Array,
        default: []
    },
    sectionContentH4TableContent: {
        type: Array,
        default: []
    }
});
</script>

<style lang="scss" scoped>

</style>