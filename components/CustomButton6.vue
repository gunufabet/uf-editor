<template>
    <!-- <div class="btn-wrapper"> -->
        <button :id="id" class="custom-btn">
            <div class="btn-content-wrapper">
                <div class="label-text-1">{{ props.label }}</div>
            </div>
        </button>
    <!-- </div> -->
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

.btn-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.custom-btn {
    border-radius: 8px;
    border: 1px solid #8B6832;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    flex-shrink: 0;
    padding: 1rem;
    color: #EBC76E;
}

.label-text-1 {
    color: #EBC76E;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
</style>