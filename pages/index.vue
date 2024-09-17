<template>
  <sport-soccer-home></sport-soccer-home>
</template>

<script setup lang="ts">
useHead({
  title: 'UFABET',
  meta: [
    { name: 'description', content: 'My amazing UFABET.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
