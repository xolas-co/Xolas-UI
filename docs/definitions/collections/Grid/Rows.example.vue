<template>
  <xui-grid :columns="3">
    <xui-grid-row>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
    </xui-grid-row>

    <xui-grid-row>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'RowsExample',
};
</script>
