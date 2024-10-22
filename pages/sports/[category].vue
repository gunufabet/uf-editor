<template>
  <sport-soccer-index v-if="route.params.category === 'soccer'"></sport-soccer-index>
  <main-content v-else :main-title-text="route.params.category" :main-content-text="mainContentText"></main-content>
  <div class="break-space"></div>
  <!-- <button id="scrollupBtn" @click="topFunction">
    <img src="/img/icn-scrollup.svg" alt="scroll up">
  </button> -->
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const pageTitle = route.params.category
const pageDescription = 'Welcome to UFA - ' + route.params.category
const mainContentText = ref('');

onMounted(() => {
  document.addEventListener("scroll", scrollFunction);
})

function scrollFunction() {
  const scrollupBtn = document.getElementById("scrollupBtn");
  if (scrollupBtn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollupBtn.style.display = "block";
    } else {
      scrollupBtn.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>