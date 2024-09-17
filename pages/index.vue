<template>
  <sport-soccer-home></sport-soccer-home>
</template>

<script setup lang="ts">
useHead({
  title: 'TEST U',
  meta: [
    { name: 'description', content: 'My amazing test U.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
