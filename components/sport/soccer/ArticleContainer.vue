<template>
    <a style="color: transparent;" href="" class="article-container">
        <button class="open-link-btn">
            <img src="/img/soccer/icn-open-link.svg" :alt="props.newsImgAlt">
        </button>
        <img class="article-img" :src="props.newsImgSrc" :alt="props.newsImgAlt">
        <div class="article-content-wrapper">
            <div class="content-text">
                {{ props.newsContent }}
            </div>
            <div class="date-wrapper"><span>{{ props.newsTime }}</span></div>
        </div>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    newsId: {
        type: String,
        default: ''
    },
    newsTime: {
        type: String,
        default: ''
    },
    newsImgSrc: {
        type: String,
        default: ''
    },
    newsImgAlt: {
        type: String,
        default: ''
    },
    newsContent: {
        type: String,
        default: ''
    },
});
</script>

<style lang="scss" scoped>
.article-container {
    display: block;
    position: relative;
    max-width: 175px;
    // min-height: 210px;
    border-radius: 8px;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    transition: transform .2s ease-in;    
}

.article-container:hover {
    transform: scale(1.05);
}

.article-img {
    width: -webkit-fill-available;
    height: auto;
    border-radius: 8px 8px 0 0;
    overflow-clip-margin: content-box;
    overflow: clip;
}

.article-content-wrapper {
    position: relative;
    padding: .5rem;
}

.content-text {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;

    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
}

.open-link-btn {
    position: absolute;
    top: 0.5rem;
    right: -2px;
    z-index: 1;
}

.date-wrapper {
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 8.06%, rgba(49, 40, 17, 0.71) 48.61%, #846B2D 100%);
    color: #EBC76E;
    font-size: 10px;
    height: 15px;
    left: 0;
    line-height: 10px;
    position: absolute;
    top: -18px;
    width: 100%;
    // width: -moz-fit-content;
    // width: fit-content;    
    align-content: center;
    padding-left: .5rem;
}
</style>