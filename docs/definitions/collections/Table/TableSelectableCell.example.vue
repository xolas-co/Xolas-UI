<template lang="html">
  <xui-table celled>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Name</xui-table-header-cell>
        <xui-table-header-cell>Status</xui-table-header-cell>
        <xui-table-header-cell>Edit</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>John</xui-table-cell>
        <xui-table-cell>No Action</xui-table-cell>
        <xui-table-cell selectable>
          <a href="#">Edit</a>
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell selectable>
          <a href="#">Edit</a>
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Denied</xui-table-cell>
        <xui-table-cell selectable>
          <a href="#">Edit</a>
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row warning>
        <xui-table-cell>John</xui-table-cell>
        <xui-table-cell>No Action</xui-table-cell>
        <xui-table-cell selectable>
          <a href="#">Requires change</a>
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell positive>Approved</xui-table-cell>
        <xui-table-cell positive selectable>
          <a href="#">Approve</a>
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell negative>Denied</xui-table-cell>
        <xui-table-cell selectable negative>
          <a href="#">Remove</a>
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableSelectableCellExample',
};
</script>
