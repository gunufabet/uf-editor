<template>
    <main-content :main-title-text="content.main.title" :main-content-text="content.main.content"></main-content>
    <br><br>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section2.title"
        :section-content="content.section2.content">
    </accordion-h2-style-2>

    <!-- sectionWithMenuLeague -->
    <sport-soccer-live-match-by-league></sport-soccer-live-match-by-league>    

    <br><br>
    <tab-menu @select-tab-menu="selectTabMenu" :tab-menu-list="tabMenuList"></tab-menu>
    <sport-soccer-menu-tab-football-betting
        v-if="selectedMenuId === 'football-betting'"></sport-soccer-menu-tab-football-betting>
    <sport-soccer-menu-tab-football-odds
        v-if="selectedMenuId === 'football-odds'"></sport-soccer-menu-tab-football-odds>
    <sport-soccer-menu-tab-football-leagues
        v-if="selectedMenuId === 'football-leagues'"></sport-soccer-menu-tab-football-leagues>

    <br><br>

    <accordion-h2-style2 :section-title="content.section3.titleH2" :section-content="content.section3.contentH2">
    </accordion-h2-style2>

    <br><br>

    <accordion-h2-style-2 :section-title="content.section4.titleH2" :section-content="content.section4.contentH2">
    </accordion-h2-style-2>
    
    <!-- <br v-if="content.section4.showBetBoost"> -->    
    <sport-soccer-bet-boost style="margin-top: 30px;" v-if="content.section4.showBetBoost"></sport-soccer-bet-boost>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section5.titleH2"
        :section-content="content.section5.contentH2">
    </accordion-h2-style-2>

    <br><br>

    <accordion-h2-style-2 style="margin-top: 30px;" :section-title="content.section6.titleH2"
        :section-content="content.section6.contentH2">
    </accordion-h2-style-2>

    <br><br>

    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section6.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>

    <br><br>

    <accordion-h2-style-2 :section-title="content.section7.titleH2" :section-content="content.section7.contentH2">
    </accordion-h2-style-2>

    <br><br>

    <accordion-h3 style="margin-left: 1rem;" v-for="(item, index) in content.section7.contentListH3" :key="index"
        :section-title="item.title" :section-content="item.content" :with-break-line="false"></accordion-h3>
</template>

<script setup lang="ts">
import { getContentSoccer } from '@/composables/generalUtil'
const content = ref(getContentSoccer());

const tabMenuList = ref(content.value.sectionWithMenu1.menuTab);
const selectedMenuId = ref('football-betting');

function selectTabMenu(value: string) {
    if (!value) {
        value = tabMenuList.value[0].id;
        selectedMenuId.value = value;
    }

    const selectedMenu = tabMenuList.value.find(
        (menu) => menu.id === value
    );

    selectedMenuId.value = selectedMenu?.id || '';
}

onMounted(() => {
    selectTabMenu(''); 
})
</script>