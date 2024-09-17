<template>
    <button class="custom-btn">{{ props.label }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.custom-btn {
    height: 44px;
    min-width: 174px;
    border-radius: 8px;
    background: var(--ori, linear-gradient(317deg, #CCAB67 3.36%, #AE874B 46.99%, #FCF3AC 90.62%));
    color: #181818;
    text-align: center;
    text-shadow: 0px 1px 1px #FCDD9A;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}
</style>