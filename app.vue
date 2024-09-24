<template>
  <NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  removeDefaultNuxtDiv()
})

function removeDefaultNuxtDiv() {
  const nuxtElement = document.getElementById('__nuxt');
  if (nuxtElement) {
    const headerElement = nuxtElement.querySelector('#header');
    const mainElement = nuxtElement.querySelector('#main');
    const footerElement = nuxtElement.querySelector('#footer');
    const buttonElement = nuxtElement.querySelector('#scrollupBtn');

    nuxtElement.parentNode?.removeChild(nuxtElement);

    if (document.body.firstChild) {
      if (buttonElement) {
        document.body.insertBefore(buttonElement, document.body.firstChild);
      }

      if (footerElement) {
        document.body.insertBefore(footerElement, document.body.firstChild);
      }

      if (mainElement) {
        document.body.insertBefore(mainElement, document.body.firstChild);
      }

      if (headerElement) {
        document.body.insertBefore(headerElement, document.body.firstChild);
      }
    }
  }
}
</script>