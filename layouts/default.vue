<template>
  <layout-header />
  <layout-container />
  <NuxtPage />
  <layout-footer />
</template>

<script setup lang="ts">
// useAsyncData('sports', async () => await useSportStore().fetchSportCateogry())

useHead({
  title: 'TEST U',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Welcome to TEST U'
    }
  ]
})
</script>