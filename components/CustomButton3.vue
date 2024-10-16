<template>
    <button :id="id" class="custom-btn"
        :class="[isSelected ? 'selected' : 'notSelected', withMinWidth ? 'with-min-width' : '']"><span
            class="custom-button-text">{{ props.label }}</span></button>
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
    },
    withMinWidth: {
        type: Boolean,
        default: true
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
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    padding-left: 1rem;
    padding-right: 1rem;
}

.with-min-width {
    min-width: 174px;    
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

.custom-button-text {
    margin-left: 1rem;
    margin-right: 1rem;    
}

@media only screen and (max-width:475px) {
    .custom-button-text {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>