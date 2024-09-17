<template>
    <header>
        <div class="header-layout">
            <div class="header-layout-logo">
                <img class="header-layout-logo-img" src="/img/ubet-logo.png" alt="" @click="goToMain">
            </div>
            <div class="header-layout-btn-container">
                <language-option></language-option>
                <register-button :btn-text="$t('layout.header.button.register')" @click="clickLogin"></register-button>
            </div>
        </div>

        <!-- Login Modal -->
        <login-modal v-if="showModal" @close="showModal = false"></login-modal>

        <layout-sport-menu></layout-sport-menu>
    </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const router = useRouter();
const routeName = ref('sports')

const showModal = ref(false);

function clickLogin() {
    showModal.value = !showModal.value;
}

function goToMain() {
    return router.push(localePath({ name: routeName.value }));
}
</script>

<style lang="scss" scoped>
.header-layout-logo {
    padding: 10px;
    display: flex;
    align-items: center;

    &-img {
        cursor: pointer;
        width: 132px;
        height: 22px;
    }
}

.header-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.header-layout-btn-container {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    align-items: center;
}

@media only screen and (max-width:475px) {}
</style>