<template>
  <xui-grid>
    <xui-grid-row>
      <xui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
    </xui-grid-row>

    <xui-grid-row>
      <xui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'ColumnsExample',
};
</script>
