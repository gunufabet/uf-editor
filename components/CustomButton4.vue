<template>
    <button :id="id" class="custom-btn">
        <div class="btn-content-wrapper">
            <img :src="iconSrc" :alt="iconAlt">
            <div class="label-text-1">{{ props.label }}</div>
            <div class="label-text-2">{{ props.label2 }}</div>
        </div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    iconSrc: {
        type: String,
        default: ''
    },
    iconAlt: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    label2: {
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
    justify-content: start;
    align-items: flex-start;
}

.custom-btn {
    border-radius: 8px;
    border: 1px solid #8B6832;
    background: var(--linear-bar, linear-gradient(90deg, #2B2B32 0%, #484141 100%));
    // min-width: 115px;
    // min-height: 74px;
    flex-shrink: 0;
    // padding: 0.6rem 3rem 0.6rem 1rem;
    padding: 0.6rem 0 0.6rem 0.8rem;
    min-width: 155px;
    // padding: 1rem;
    color: #EBC76E;
}

.label-text-1 {
    color: #EBC76E;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin-top: 0.8rem;
}

.label-text-2 {
    color: #EBC76E;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
}

@media only screen and (max-width:475px) {
    .custom-btn {
        min-width: 115px;
    }
}
</style>