<template>
  <layout-header id="header" />
  <!-- <layout-container /> -->
  <main id="main">
    <NuxtPage />
  </main>
  <layout-footer id="footer">
  </layout-footer>
  <button id="scrollupBtn" @click="topFunction">
    <img src="/img/icn-scrollup.svg" alt="scroll up">
  </button>
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

<style lang="scss" scoped>

#main{
  overflow-y: hidden;
}

@media only screen and (max-width: 475px) {
  #scrollupBtn {
    display: block;
    position: fixed;
    bottom: 30px;
    left: 20px;
    z-index: 99;
  }
}

@media (min-width: 476px) {
  #scrollupBtn {
    display: none;
    position: fixed;
  }
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