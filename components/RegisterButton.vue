<template>
    <button class="custom-btn-container btn-type btn-text"><span class="register-btn-text">{{ props.btnText
            }}</span></button>
</template>

<script setup lang="ts">
const props = defineProps({
    btnText: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.custom-btn-container {
    // width: 91px;
    cursor: pointer;
    color: #0A0425;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(255, 246, 219, 0.80);
    font-weight: 500;
    border-style: solid;
    background: var(--Linear, linear-gradient(227deg, #8B6832 12.69%, #FCDD9A 51.04%, #966B2A 87.06%));
}

.btn-type {
    border-radius: 25px;
    height: 36px !important;
}

.btn-text {
    color: #0A0425;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(255, 246, 219, 0.80);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.register-btn-text {
    margin: 0 0.5rem 0 0.5rem;
}

@media only screen and (max-width:475px) {
    .btn-text {
        font-size: 12px;
    }
}
</style>