<template lang="html">
  <xui-table>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell :width="10">Name</xui-table-header-cell>
        <xui-table-header-cell :width="6">Status</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>John</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Denied</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
    <xui-table-footer>
      <xui-table-header-cell>3 People</xui-table-header-cell>
      <xui-table-header-cell>2 Approved</xui-table-header-cell>
    </xui-table-footer>
  </xui-table>
</template>

<script>
export default {
  name: 'TableColumnWidthExample',
};
</script>
