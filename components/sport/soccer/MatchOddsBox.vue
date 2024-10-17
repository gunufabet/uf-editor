<template>
    <button>
        <div class="match-odd-box">
            <div class="odd-text-1">{{ oddOption }}</div>
            <div class="odd-text-2" style="margin-top: 0.3rem;">{{ odds }}</div>
        </div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    oddOption: {
        type: String,
        default: ''
    },
    odds: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.match-odd-box {
    min-width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0.5rem;
    color: yellow;
    border-radius: 8px;
    border: 1px solid #2B2B32;
    background: #181818;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
}

.odd-text-1 {
    color: #AE874B;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.odd-text-2 {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0.4rem 0 0.4rem;
}

@media only screen and (max-width:475px) {

    .odd-text-1 {
        font-size: 9px;
    }

    .odd-text-2 {
        font-size: 11px;
    }

}
</style>