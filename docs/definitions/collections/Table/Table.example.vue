<template lang="html">
  <xui-table celled>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Header</xui-table-header-cell>
        <xui-table-header-cell>Header</xui-table-header-cell>
        <xui-table-header-cell>Header</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>

    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>
          <xui-label ribbon>First</xui-label>
        </xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Cell</xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>Cell</xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
        <xui-table-cell>Cell</xui-table-cell>
      </xui-table-row>
    </xui-table-body>

    <xui-table-footer>
      <xui-table-row>
        <xui-table-header-cell colspan="3">
          <xui-menu v-xui-floated:right pagination>
            <a is="xui-menu-item" icon>
              <xui-icon name="left chevron" />
            </a>
            <a is="xui-menu-item">1</a>
            <a is="xui-menu-item">2</a>
            <a is="xui-menu-item">3</a>
            <a is="xui-menu-item">4</a>
            <a is="xui-menu-item" icon>
              <xui-icon name="right chevron" />
            </a>
          </xui-menu>
        </xui-table-header-cell>
      </xui-table-row>
    </xui-table-footer>
  </xui-table>
</template>

<script>
export default {
  name: 'TableExample',
};
</script>
