<template>
    <button :id="id" class="custom-btn" :class="isSelected ? 'selected' : 'notSelected'">{{ props.label }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    isSelected: {
        type: Boolean,
        default: false
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
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
}

.selected {
    background: var(--ori, linear-gradient(317deg, #CCAB67 3.36%, #AE874B 46.99%, #FCF3AC 90.62%));
    color: #181818;
    text-shadow: 0px 1px 1px #FCDD9A;
    font-weight: 500;
}

.notSelected {
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    color: #AE874B;
    font-weight: 400;
}
</style>