<template>
    <div v-if="h2Title" class="tab-menu-container">
        <h2 v-for="(menu, index) in props.tabMenuList" :key="index">
            <div @click="selectTab(menu.id)" class="tab-menu-item" :class="[menu.id === selectedTab ? 'tab-highlight' : '',
    h2Title ? 'tab-menu-item-h2' : '']">{{ menu.text }}</div>
        </h2>
    </div>
    <div v-else class="tab-menu-container">
        <div v-for="(menu, index) in props.tabMenuList" :key="index">
            <div @click="selectTab(menu.id)" class="tab-menu-item"
                :class="menu.id === selectedTab ? 'tab-highlight' : ''">{{ menu.text }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from "@vue/runtime-core";
import type { TabMenu } from "~/types/strapi-model";

const props = defineProps({
    defaultSelectedTab: {
        type: String,
        default: null
    },
    tabMenuList: {
        type: Array as PropType<TabMenu[]>,
        default: ''
    },
    h2Title: {
        type: Boolean,
        default: false
    },
});

const selectedTab = ref(props.defaultSelectedTab || props.tabMenuList[0]?.id);
const emit = defineEmits(['select-tab-menu'])

const selectTab = async (menuId: string) => {
    selectedTab.value = menuId;
    emit('select-tab-menu', menuId)
}
</script>

<style lang="scss" scoped>
.tab-menu-container {
    position: relative;
    flex-shrink: 0;
    background: linear-gradient(0deg, #29272A 0%, #000 100%);

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}

.tab-menu-item {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: #FFF;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-wrap: nowrap;
    margin-left: 1rem;
    margin-right: 1rem;

    &:hover {
        color: #EBC76E;
    }
}

.tab-menu-item-h2 {
    width: 270px;
    text-wrap: pretty;
    line-height: 1.5rem;
}

.tab-highlight {
    border-style: solid;
    border-width: 0 0 4px 0;
    border-color: #EBC76E;

    color: #EBC76E;
    font-weight: 700;

    padding-bottom: 0.8rem;
    padding-top: 1rem;
}

@media only screen and (max-width:475px) {
    .tab-menu-item {
        font-size: 16px;
    }
}
</style>