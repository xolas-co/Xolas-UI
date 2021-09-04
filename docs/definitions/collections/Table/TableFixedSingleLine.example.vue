<template lang="html">
  <xui-table fixed single-line>
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
        <xui-table-cell
          title="This is much too long to fit I'm sorry about that"
        >
          This is much too long to fit I'm sorry about that
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jamie</xui-table-cell>
        <xui-table-cell>Approved</xui-table-cell>
        <xui-table-cell>Shorter description</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Jill</xui-table-cell>
        <xui-table-cell>Denied</xui-table-cell>
        <xui-table-cell>Shorter description</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableFixedSingleLineExample',
};
</script>
