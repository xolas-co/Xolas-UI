<template>
  <xui-table celled definition sortable>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell v-for="field in fields" :key="field.key">
          {{ field.text }}
        </xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row v-for="(row, index) in data" :key="index">
        <xui-table-cell v-for="field in fields" :key="field.key">
          {{ row[field.key] }}
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  props: {
    fields: Array,
    data: Array,
  },
};
</script>
