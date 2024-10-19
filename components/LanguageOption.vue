<template>
    <div class="lang-container dropdown">
        <img class="dropdown lang-img" :src="selectedLanguageImg" :alt="selectedLanguageAlt">
        <span class="dropdown lang-text">{{ selectedLanguageText }}</span>

        <div>
            <ul v-if="showDropDown" class="dropdown-menu language-menu">
                <li class="dropdown-item" v-for="(lang, index) in languageList" :key="index"
                    @click="changeLanguage(lang)">
                    <div class="dropdown-item-text">
                        <img class="lang-img" :src="lang.src" :alt="lang.alt">
                        <span>{{ lang.text }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LanguageType } from "~/enums/lang-code";

const { setLocale, t, locale } = useI18n()
const showDropDown = ref(false);

const languageList = ref([
    {
        id: 'en',
        src: '/img/lang/en.svg',
        alt: 'English',
        text: 'English',
        textShort: 'EN',
        locale: LanguageType.ENGLISH,
    },
    {
        id: 'th',
        src: '/img/lang/th.svg',
        alt: 'ภาษาไทย',
        text: 'ภาษาไทย',
        textShort: 'TH',
        locale: LanguageType.THAILAND,
    }
    // ,
    // {
    //     id: 'id',
    //     src: '/img/lang/id.svg',
    //     alt: 'Indonesia',
    //     textShort: 'ID',
    //     text: 'Indonesia',
    //     locale: LanguageType.ENGLISH,
    // },
]);
const selectedLanguageImg = ref(languageList.value[0].src);
const selectedLanguageText = ref(languageList.value[0].textShort);
const selectedLanguageAlt = ref(languageList.value[0].alt);

onMounted(() => {
    document.addEventListener("click", toggleDropdown);
})

function toggleDropdown(event: any) {
    if (event.target.classList.contains('dropdown')) {
        showDropDown.value = !showDropDown.value;
    } else {
        showDropDown.value = false;
    }
}

function changeLanguage(lang: any) {
    selectedLanguageImg.value = lang.src;
    selectedLanguageText.value = lang.textShort;
    selectedLanguageAlt.value = lang.alt;

    setLocale(lang.locale)
}
</script>

<style lang="scss" scoped>
.lang-container {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: fit-content;
    border-radius: 24px;
    padding: 0;
    background-image: linear-gradient(227deg, #8B6832 12.69%, #FCDD9A 51.04%, #966B2A 87.06%);
    /* Fill the inside with white */
    background-origin: border-box;
    // box-shadow: inset 0 100vw white;
    box-shadow: inset 0 100vw black;
    /* A transparent border, so the very edge of the button shows through */
    border: 1px solid transparent;
    height: 28px;
}

.lang-img {
    padding: 0.2rem;
    width: 21px;
    height: 21px;
}

.lang-text {
    margin: 0 0.5rem 0 0.3rem;
    color: #EBC76E;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.language-menu {
    // height: 162px;
    max-height: calc(-150px + 100vh);
    overflow-y: auto;
}

.dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: block;
    min-width: 13rem;
    font-size: 1rem;
    color: yellow;
    text-align: left;
    background-color: #202020;
    background-clip: padding-box;
    padding: 0.5rem;
    margin: 0.5rem;
    list-style: none;
    border-width: 1px;
    border-style: solid;
    border-color: #464646;
    border-image: initial;
    border-radius: 0.25rem;

    right: 0px;
    left: auto;

    top: 100%;
    margin-top: 0.125rem;

    -webkit-transition: all .10s ease;
    -moz-transition: all .10s ease;
    -ms-transition: all .10s ease;
    -o-transition: all .10s ease;
    transition: all .10s ease;
}

.dropdown-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    clear: both;
    text-align: inherit;
    background-color: transparent;
    padding: 6px 0px;
    text-decoration: none;
    white-space: nowrap;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;

    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.dropdown-item:hover {
    background: #3D3320;
}

.dropdown-item-text {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    margin: 0.3rem;
}

@media only screen and (max-width:475px) {
    .lang-text {
        font-size: 12px;
    }
}
</style>