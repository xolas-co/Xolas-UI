<template>
  <xui-grid celled="internally">
    <xui-grid-row>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
      <xui-grid-column :width="10">
        <docs-wireframe name="centered-paragraph" />
      </xui-grid-column>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
    </xui-grid-row>

    <xui-grid-row>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
      <xui-grid-column :width="10">
        <docs-wireframe name="media-paragraph" />
      </xui-grid-column>
      <xui-grid-column :width="3">
        <docs-wireframe name="image" />
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'InternallyCelledExample',
};
</script>
