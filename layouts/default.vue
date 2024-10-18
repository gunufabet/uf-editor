<template>
  <layout-header id="header" />
  <!-- <layout-container /> -->
  <main id="main">
    <NuxtPage />    
  </main>
  <layout-footer id="footer">
  </layout-footer>
</template>

<script setup lang="ts">
// useAsyncData('sports', async () => await useSportStore().fetchSportCateogry())
useAsyncData('sports', async () => await useSportStore().fetchRunningMatch())
useAsyncData('sports', async () => await useSportStore().fetchRunningMatchByLeague())
useAsyncData('sports', async () => await useSportStore().fetchSportCount())

useHead({
  title: 'UFABET',
  // meta: [
  //   {
  //     hid: 'description',
  //     name: 'description',
  //     content: 'Welcome to UFABET'
  //   }
  // ]
})
</script>

<style lang="scss" scoped>
#main {
  overflow-y: hidden;
}

@media (min-width: 1000px) {
  #main {
    margin: 0 auto;
    max-width: 100%;
    padding-left: 15%;
    padding-right: 15%;
  }
}

@media (min-width: 1980px) {
  #main {
    margin: 0 auto;
    max-width: 100%;
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>