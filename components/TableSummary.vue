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
    overflow-x: auto;
}

.summary-table {
    width: 100%;
    table-layout: inherit;
    border-collapse: collapse;
}

.summary-table th,
.summary-table td {
    text-align: left;
    padding: 1rem;
}

.summary-table th {
    background: #2B2B32;

    color: #EBC76E;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.summary-table td {
    color: #D9D9D9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-content: start;

    border-bottom: 1px solid rgba(204, 171, 103, 0.5);
}

// .summary-table th {
//     background: #2B2B32;
// }

.summary-table tr {
    background: transparent;
}

.summary-table-bg {
    background: #2B2B32;
}
</style>