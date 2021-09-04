<template lang="html">
  <xui-table celled>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Name</xui-table-header-cell>
        <xui-table-header-cell>Status</xui-table-header-cell>
        <xui-table-header-cell>Notes</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>No Name Specified</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
      <xui-table-row error>
        <xui-table-cell>Jimmy</xui-table-cell>
        <xui-table-cell>Cannot pull data</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell state="error">
          <xui-icon name="attention" />
          Classified
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableErrorExample',
};
</script>
