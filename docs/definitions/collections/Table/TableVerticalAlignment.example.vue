<template lang="html">
  <xui-table striped>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Name</xui-table-header-cell>
        <xui-table-header-cell>Status</xui-table-header-cell>
        <xui-table-header-cell>Notes</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row vertical-align="top">
        <xui-table-cell>John</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell vertical-align="top">
          Notes<br />
          1<br />
          2<br />
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell vertical-align="bottom">Approved</xui-table-cell>
        <xui-table-cell>
          Notes<br />
          1<br />
          2<br />
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableVerticalAlignmentExample',
};
</script>
