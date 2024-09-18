<template>
    <section class="section-content">
        <!-- h2 -->
        <h2 v-if="props.sectionTitle" class="subTitle">{{ props.sectionTitle }}</h2>
        <p v-if="props.sectionContent" class="section-content-detail section-content-title-detail"
            v-html="props.sectionContent">
        </p>

        <details class="section-content-detail section-content-detail-wrapper"
            v-for="(content, index) in props.sectionSubContent" :key="index">
            <summary class="section-content-detail-h3-title">{{ content.title }}</summary>
            <p class="section-content-detail-h3-content" v-html="content.content"></p>
        </details>

        <!-- h3 -->
        <h3 v-if="props.sectionTitleH3" class="subTitleH3">{{ props.sectionTitleH3 }}</h3>
        <p v-if="props.sectionContentH3"
            class="section-content-detail section-content-title-detail subTitleH3DetailSpace"
            v-html="props.sectionContentH3">
        </p>

        <details class="section-content-detail section-content-detail-wrapper subTitleH3DetailSpace"
            v-for="(content, index) in props.sectionSubContentH3" :key="index">
            <summary class="section-content-detail-h3-title">{{ content.title }}</summary>
            <p class="section-content-detail-h3-content" v-html="content.content"></p>
        </details>

        <!-- h4 -->
        <h4 v-if="props.sectionTitleH4" class="subTitleH4">{{ props.sectionTitleH4 }}</h4>
        <p v-if="props.sectionContentH4"
            class="section-content-detail section-content-title-detail subTitleH4DetailSpace"
            v-html="props.sectionContentH4">
        </p>

        <details class="section-content-detail section-content-detail-wrapper subTitleH4DetailSpace"
            v-for="(content, index) in props.sectionSubContentH4" :key="index">
            <summary class="section-content-detail-h3-title">{{ content.title }}</summary>
            <p class="section-content-detail-h3-content" v-html="content.content"></p>
        </details>
    </section>
</template>

<script setup lang="ts">
import { type PropType } from "@vue/runtime-core";
import type { SportSubContent } from "~/types/strapi-model";

const props = defineProps({
    sectionTitle: {
        type: String,
        default: ''
    },
    sectionContent: {
        type: String,
        default: ''
    },
    sectionSubContent: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    },
    sectionTitleH3: {
        type: String,
        default: ''
    },
    sectionContentH3: {
        type: String,
        default: ''
    },
    sectionSubContentH3: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    },
    sectionTitleH4: {
        type: String,
        default: ''
    },
    sectionContentH4: {
        type: String,
        default: ''
    },
    sectionSubContentH4: {
        type: Array as PropType<SportSubContent[]>,
        default: () => []
    }
});
</script>

<style lang="scss" scoped>
.section-content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    &-title-detail {
        margin: 0.5rem 0 0.5rem 0;
    }

    &-detail {
        text-align: left;
        padding: 0 1.2rem 0 1.2rem;
        color: #D9D9D9;
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;

        &-h3-title {
            padding: 0.5rem 0.5rem 0.5rem 1.3em;
            color: #CCAB67;
            font-size: 14px;
            font-weight: 500;
        }

        &-h3-content {
            color: #D9D9D9;
            text-align: left;
            margin-left: 2.4em;
            margin-bottom: 0.5rem;
            font-size: 12px;
            font-weight: 300;
            line-height: 18px;
        }
    }
}

.subTitle {
    color: #EBC76E;
    font-weight: 400;
    padding: 0 0.5rem 0 1rem;
    position: relative;
}

.subTitle::before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 18px;
    background-image: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
}

.subTitleH3 {
    color: #EBC76E;
    font-weight: 400;
    padding: 0 0.5rem 0 0.7rem;
    margin: 0.5rem 1rem 0.5rem 1.4rem;
    position: relative;
}

.subTitleH3::before {
    content: '';
    position: absolute;
    top: 3px;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 15px;
    background-image: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
}

.subTitleH4 {
    color: #EBC76E;
    font-weight: 400;
    padding: 0 0.5rem 0 0.7rem;
    margin: 0.5rem 1rem 0.5rem 2.5rem;
    position: relative;
}

.subTitleH4::before {
    content: '';
    position: absolute;
    top: 3px;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 14px;
    background-image: linear-gradient(180deg, #EBC76E 0%, #85713E 100%);
}

.subTitleH3DetailSpace {
    margin: 0 1rem 0 1rem;
}

.subTitleH4DetailSpace {
    margin: 0 1rem 0 2rem;
}

.section-content-detail-wrapper summary {
    list-style: none;
    /* Hide the default icon */
    cursor: pointer;
    /* Add a pointer cursor */
    position: relative;
    /* Position the custom icon */
    padding-left: 30px;
}

/* Remove tap highlight in Safari */
.section-content-detail-wrapper summary {
    list-style: none;
}

.section-content-detail-wrapper summary::-webkit-details-marker {
    display: none;
}

/* Add a custom Base64-encoded SVG icon before the summary text */
.section-content-detail-wrapper summary::before {
    content: '';
    display: inline-block;
    width: 11px;
    height: 12px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDExIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTAuMjIxNyA2LjkwMzgxTDEuNTYxNDUgMTEuODU5MkMwLjcyMTQ4MyAxMi4zMzkyIC0wLjI2NDcxMSAxMS41MTA1IDAuMDY1Mjg0NiAxMC42MDEyTDEuNzI4MzIgNi4wMDAxNEwwLjA2NTI4NDYgMS4zOTkwN0MtMC4yNjQ3MTEgMC40ODc4MTcgMC43MjE0ODMgLTAuMzM4OTk1IDEuNTYxNDUgMC4xNDA5NzJMMTAuMjIxNyA1LjA5NjM3QzEwLjkyMjkgNS40OTU3NCAxMC45MjEgNi41MDQ0NSAxMC4yMjE3IDYuOTAzODFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzc3XzM1MCkiLz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zNzdfMzUwIiB4MT0iOS4zNDUxMiIgeTE9IjEuNDc4MjYiIHgyPSIwLjI0ODQzNSIgeTI9IjkuMDc5NTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhCNjgzMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTE1NjI1IiBzdG9wLWNvbG9yPSIjRkNERDlBIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk2NkIyQSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+Cjwvc3ZnPg==');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    // top: 0;
    transform: translateY(0);
    /* Center the icon vertically */
    transition: transform 0.3s ease;
    margin-top: 5px;
    /* Fine-tune alignment if needed */
}

/* Rotate the icon when the details are open */
.section-content-detail-wrapper[open] summary::before {
    transform: rotate(90deg);
}

@media only screen and (max-width:475px) {
    .section-content {

        &-sub-title {
            font-size: 28px;
        }
    }
}
</style>