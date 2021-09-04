<template lang="html">
  <xui-table fixed>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Name</xui-table-header-cell>
        <xui-table-header-cell>Status</xui-table-header-cell>
        <xui-table-header-cell>Description</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>John</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell>
          John is an interesting boy but sometimes you don't really have enough
          room to describe everything you'd like
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell>
          Jamie is a kind girl but sometimes you don't really have enough room
          to describe everything you'd like
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Denied</xui-table-cell>
        <xui-table-cell>
          Jill is an alright girl but sometimes you don't really have enough
          room to describe everything you'd like
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableFixedExample',
};
</script>
