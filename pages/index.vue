<template>
  <sport-soccer-home-2 v-if="withCmsPage"></sport-soccer-home-2>
  <sport-soccer-home v-else></sport-soccer-home>  
  <!-- <button id="scrollupBtn" @click="topFunction">
    <img src="/img/icn-scrollup.svg" alt="scroll up">
  </button> -->
</template>

<script setup lang="ts">
import { SiteMenu } from "~/enums/site-menu.js";
import { useSportStore } from "~/stores/sport";
const { pageMetaInfo } = storeToRefs(useSportStore());
const { locale } = useI18n()
const route = useRoute()
const withCmsPage = ref(route.query.cms || false)

const pageMeta = ref(pageMetaInfo.value?.find(
    (content) => content.siteMenu === SiteMenu.SPORTS_BETTING
));

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  articleModifiedTime: '2024-10-01',
  title: pageMeta.value?.title || 'UFABET',
  ogTitle: pageMeta.value?.title || 'UFABET',
  description: pageMeta.value?.description || 'UFABET',
  ogDescription: pageMeta.value?.description || 'UFABET',
  ogImage: pageMeta.value?.ogImageUrl || 'https://staging.d3udvztif3rxu4.amplifyapp.com/img/ubet-logo.png',
  twitterCard: 'summary_large_image',
  ogUrl: pageMeta.value?.ogUrl
})

useHead({
  title: pageMeta.value?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageMeta.value.description
    }
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      hreflang: locale.value,
      href: pageMeta.value?.ogUrl
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: pageMeta.value?.ogUrl
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageMeta.value?.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pageMeta.value?.description 
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: pageMeta.value?.ogImage
    }
  ]
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