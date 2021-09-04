<template lang="html">
  <xui-grid divided="vertically">
    <xui-grid-row :columns="2">
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column>
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
    </xui-grid-row>
    <xui-grid-row :columns="3">
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
  name: 'VerticallyDividedExample',
};
</script>
