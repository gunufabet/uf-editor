<template>
    <div class="breadcrumb-wrapper">
        <span class="main-menu-text" @click="goToMainMenu">{{ mainMenu }}</span>
        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
            <path d="M5 1L1 4.5L5 8" stroke="#EBC76E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <span class="sub-menu-text" @click="goToSubMenu">{{ subMenu }}</span>
        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
            <path d="M5 1L1 4.5L5 8" stroke="#EBC76E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <span style="color: #B6B6B6;">{{ subItem }}</span>
    </div>
</template>

<script setup lang="ts">
const openPanel = ref(false);
const router = useRouter()
const localePath = useLocalePath()

const props = defineProps({
    mainMenu: {
        type: String,
        default: ''
    },
    mainMenuRoute: {
        type: String,
        default: ''
    },
    subMenu: {
        type: String,
        default: ''
    },
    subMenuRoute: {
        type: String,
        default: ''
    },
    subItem: {
        type: String,
        default: ''
    },
});

function goToMainMenu() {
    return router.push(localePath({ name: props.mainMenuRoute }));
}

function goToSubMenu() {
    return router.push(localePath({ name: props.mainMenuRoute, params: { category: props.subMenuRoute } }));
}
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
    background: linear-gradient(90deg, #484141 0%, rgba(72, 65, 65, 0.00) 100%);
    padding: 1rem;
}

.arrow-icon {
    margin-left: 1rem;
    margin-right: 1rem;
    transform: rotate(180deg);
}

.main-menu-text{
    cursor: pointer;
}

.sub-menu-text{
    cursor: pointer;
}
</style>