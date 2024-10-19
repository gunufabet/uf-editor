<template>
  <sport-soccer-home></sport-soccer-home>
  <!-- <button id="scrollupBtn" @click="topFunction">
    <img src="/img/icn-scrollup.svg" alt="scroll up">
  </button> -->
</template>

<script setup lang="ts">
useHead({
  title: 'UFABET',
  // meta: [
  //   { name: 'description', content: 'My amazing UFABET.' }
  // ],
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