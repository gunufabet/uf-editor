<template>
    <div class="show-more-wrapper">
        <button class="show-more-btn">{{ props.label }}</button>
    </div>
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
.show-more-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.show-more-btn {
    border-radius: 25px;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    color: #EBC76E;
    font-size: 14px;
    // font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 46px;
    min-width: 358px;
}
</style>