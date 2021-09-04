<template lang="html">
  <xui-table definition>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell />
        <xui-table-header-cell>Arguments</xui-table-header-cell>
        <xui-table-header-cell>Description</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>reset rating</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
        <xui-table-cell>Resets rating to default value</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>set rating</xui-table-cell>
        <xui-table-cell>rating (integer)</xui-table-cell>
        <xui-table-cell
          >Sets the current star rating to specified value</xui-table-cell
        >
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableDefinitionExample',
};
</script>
