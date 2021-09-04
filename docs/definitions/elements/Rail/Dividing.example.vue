<template lang="html">
  <xui-grid centered :columns="3">
    <xui-grid-column>
      <xui-segment>
        <docs-wireframe name="paragraph" />
        <docs-wireframe name="paragraph" />

        <xui-rail dividing position="left">
          <xui-segment>Left Rail Content</xui-segment>
        </xui-rail>

        <xui-rail dividing position="right">
          <xui-segment>Right Rail Content</xui-segment>
        </xui-rail>
      </xui-segment>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {
  name: 'RailExample',
};
</script>
