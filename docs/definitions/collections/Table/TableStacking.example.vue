<template lang="html">
  <div>
    <xui-table unstackable>
      <xui-table-header>
        <xui-table-row>
          <xui-table-header-cell>Name</xui-table-header-cell>
          <xui-table-header-cell>Status</xui-table-header-cell>
          <xui-table-header-cell text-align="right"
            >Description</xui-table-header-cell
          >
        </xui-table-row>
      </xui-table-header>
      <xui-table-body>
        <xui-table-row>
          <xui-table-cell>John</xui-table-cell>
          <xui-table-cell>Approved</xui-table-cell>
          <xui-table-cell text-align="right">None</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Jamie</xui-table-cell>
          <xui-table-cell>Approved</xui-table-cell>
          <xui-table-cell text-align="right">Requires call</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Jill</xui-table-cell>
          <xui-table-cell>Denied</xui-table-cell>
          <xui-table-cell text-align="right">None</xui-table-cell>
        </xui-table-row>
      </xui-table-body>
    </xui-table>
    <xui-table stackable>
      <xui-table-header>
        <xui-table-row>
          <xui-table-header-cell>Name</xui-table-header-cell>
          <xui-table-header-cell>Status</xui-table-header-cell>
          <xui-table-header-cell text-align="right"
            >Description</xui-table-header-cell
          >
        </xui-table-row>
      </xui-table-header>
      <xui-table-body>
        <xui-table-row>
          <xui-table-cell>John</xui-table-cell>
          <xui-table-cell>Approved</xui-table-cell>
          <xui-table-cell text-align="right">None</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Jamie</xui-table-cell>
          <xui-table-cell>Approved</xui-table-cell>
          <xui-table-cell text-align="right">Requires call</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Jill</xui-table-cell>
          <xui-table-cell>Denied</xui-table-cell>
          <xui-table-cell text-align="right">None</xui-table-cell>
        </xui-table-row>
      </xui-table-body>
    </xui-table>
  </div>
</template>

<script>
export default {
  name: 'TableStackingExample',
};
</script>
