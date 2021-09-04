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
        <xui-table-cell>Unknown</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
      <xui-table-row warning>
        <xui-table-cell>Jimmy</xui-table-cell>
        <xui-table-cell>
          <xui-icon name="attention" />
          Requires Action
        </xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Unknown</xui-table-cell>
        <xui-table-cell warning>
          <xui-icon name="attention" />
          Hostile
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Unknown</xui-table-cell>
        <xui-table-cell>None</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableWarningExample',
};
</script>
