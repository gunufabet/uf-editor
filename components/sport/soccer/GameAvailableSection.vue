<template>
    <accordion-h2-style-1 v-if="gameSection?.design === '1'" style="margin-top: 1rem;"
        :section-title="gameSection?.title" :section-content="gameSection?.content"
        :section-content-2="gameSection?.content2" :h3-content-data="gameSection?.contentListH3"
        :sectionContentTableHeader="gameSection?.contentTable?.header"
        :sectionContentTableContent="gameSection?.contentTable?.content">
    </accordion-h2-style-1>

    <accordion-h2-style-2 v-if="gameSection?.design === '2'" style="margin-top: 1rem;"
        :section-title="gameSection?.title" :section-content="gameSection?.content"
        :section-content-2="gameSection?.content2" :h3-content-data="gameSection?.contentListH3"
        :sectionContentTableHeader="gameSection?.contentTable?.header"
        :sectionContentTableContent="gameSection?.contentTable?.content">
    </accordion-h2-style-2>

    <div style="padding-top: 3rem;"></div>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>

    <div style="padding-top: 1rem;"></div>
    <accordion-h3 :id="item.titleId" v-for="(item, index) in selectedMenuContent?.contentListH3" :key="index" :section-title="item.title" :section-content="item.content" :with-break-line="true"
        :defaultOpenPanel="item.defaultOpen" :img-list="item.imgList">
    </accordion-h3>
</template>

<script setup lang="ts">
import { getContent } from '@/composables/generalUtil'
const content = ref(getContent());

const props = defineProps({
    focusTitle: {
        type: Boolean,
        default: false
    },
    menuTabId: {
        type: String,
        default: ''
    }
});

watch(() => props.menuTabId, (newValue) => {
    console.log('watch', newValue)
    selectTabMenu(newValue);
    const element = document.getElementById(props.menuTabId);
    console.log('element', element)
    if (element) {
        element.focus({ preventScroll: true }); // Focus the element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
});

const gameSection = ref(content.value.Sport.Soccer.sectionGameAvailable);

const tabMenuList = ref(gameSection.value.menuTab);

const selectedMenuId = ref('');
const selectedMenuContent = ref();

function selectTabMenu(value: string) {
    if (!value) {
        value = gameSection.value.menuTab[0].id;
    }

    const selectedMenu = gameSection.value.menuContent.find(
        (content) => content.menuTabId === value
    );

    // selectedMenuId.value = selectedMenu?.menuTabId || '';

    // always select slot
    selectedMenuContent.value = gameSection.value.menuContent.find(
        (content) => content.menuTabId === 'slot'
    );
}

onMounted(() => {
    selectTabMenu('');
})
</script>