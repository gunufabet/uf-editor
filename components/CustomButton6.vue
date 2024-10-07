<template>
    <button :id="id" class="custom-btn-6">
        <div class="label-text-1">{{ props.label }}</div>        
    </button>
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

.custom-btn-6 {
    border-radius: 8px;
    border: 1px solid #8B6832;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    flex-shrink: 0;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #EBC76E;
    // max-width: 174px;
    width: fit-content;
}

.label-text-1 {
    color: #EBC76E;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}

@media only screen and (max-width:475px) {
    .custom-btn-6 {
        max-width: 144px;
    }
}
</style>