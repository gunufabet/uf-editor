<template>
    <div v-if="tableHeader.length > 0" class="summary-table-wrapper">
        <table class="summary-table">
            <thead>
                <tr>
                    <th v-for="(header, index) in props.tableHeader" :key="index"> {{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in props.tableContent" :key="rowIndex">
                    <td v-for="(content, index) in row" :key="index">{{ content }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tableHeader: {
        type: Array,
        default: []
    },
    tableContent: {
        type: Array,
        default: []
    },
});
</script>

<style lang="scss" scoped>
.summary-table-wrapper {
    padding: 1rem 0 1rem 0;
}

.summary-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

.summary-table th,
.summary-table td {
    // max-width: 33%;
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    border: 0 0 1px 0;
    border-bottom-color: rgba(132, 107, 45, 0.52);

    color: #D9D9D9;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.summary-table th {
    color: #EBC76E;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.summary-table td {
    color: #D9D9D9;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.summary-table th {
    background: #2B2B32;
}

.summary-table tr {
    background: transparent;
}

.summary-table-bg {
    background: #2B2B32;
}
</style>