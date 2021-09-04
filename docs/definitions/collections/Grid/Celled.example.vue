<template lang="html">
  <xui-grid celled>
    <xui-grid-row>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
      <xui-grid-column :width="13">
        <docs-wireframe name="centered-paragraph" />
      </xui-grid-column>
    </xui-grid-row>
    <xui-grid-row>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
      <xui-grid-column :width="10">
        <docs-wireframe name="paragraph" />
      </xui-grid-column>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'CelledExample',
};
</script>
