<template>
    <div class="btn-wrapper">
        <button class="custom-btn" :class="designType === '1' ? 'btn-design-1' : 'btn-design-2'">
            <div class="btn-content-wrapper">
                <div class="label-text-1" :class="labelDisable ? 'custom-button-7-label-disabled' : ''">{{ props.label }}
                </div>
                <div class="label-text-2">
                    <span><img :src="props.oddsIcon" :alt="props.oddsIconAlt"></span>
                    <span>{{ props.label2 }}</span>
                </div>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    labelDisable: {
        type: Boolean,
        default: false
    },
    label2: {
        type: String,
        default: ''
    },
    oddsIcon: {
        type: String,
        default: ''
    },
    oddsIconAlt: {
        type: String,
        default: ''
    },
    designType: {
        type: String,
        default: '1'
    },
});
</script>

<style lang="scss" scoped>
.btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 1rem;
}

.btn-content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 0.3rem;
}

.custom-btn {
    border-radius: 8px;
    border: 1px solid #584F4F;
    flex-shrink: 0;
    // padding: 1rem;
    color: #EBC76E;
    min-width: 83px;
    min-height: 37px;
    border-radius: 8px;
    border: 1px solid #584F4F;
}

.btn-design-1 {
    background: rgba(24, 24, 24, 0.50);
}

.btn-design-2 {
    background: var(--od, linear-gradient(180deg, #484141 0%, rgba(72, 65, 65, 0.65) 100%));
}

.label-text-1 {
    color: #EBC76E;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.label-text-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.label-text-2 img {
    display: block;
    max-width: 1rem;
    height: auto;
}

.custom-button-7-label-disabled {
    opacity: 0.5;
}
</style>