<template lang="html">
  <xui-table celled striped>
    <xui-table-header>
      <xui-table-row>
        <xui-table-headerCell colspan="3">Git Repository</xui-table-headerCell>
      </xui-table-row>
    </xui-table-header>

    <xui-table-body>
      <xui-table-row>
        <xui-table-cell collapsing>
          <xui-icon name="folder" /> node_modules
        </xui-table-cell>
        <xui-table-cell>Initial commit</xui-table-cell>
        <xui-table-cell collapsing text-align="right"
          >10 hours ago</xui-table-cell
        >
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell> <xui-icon name="folder" /> test </xui-table-cell>
        <xui-table-cell>Initial commit</xui-table-cell>
        <xui-table-cell text-align="right">10 hours ago</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell> <xui-icon name="folder" /> build </xui-table-cell>
        <xui-table-cell>Initial commit</xui-table-cell>
        <xui-table-cell text-align="right">10 hours ago</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <xui-icon name="file outline" /> package.json
        </xui-table-cell>
        <xui-table-cell>Initial commit</xui-table-cell>
        <xui-table-cell text-align="right">10 hours ago</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <xui-icon name="file outline" /> Gruntfile.js
        </xui-table-cell>
        <xui-table-cell>Initial commit</xui-table-cell>
        <xui-table-cell text-align="right">10 hours ago</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'XuiTableGitExample',
};
</script>
