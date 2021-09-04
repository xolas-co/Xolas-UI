<template>
  <xui-grid :columns="3" divided>
    <xui-grid-row stretched>
      <xui-grid-column>
        <xui-segment>1</xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment>1</xui-segment>
        <xui-segment>2</xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment>1</xui-segment>
        <xui-segment>2</xui-segment>
        <xui-segment>3</xui-segment>
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'StretchedExample',
};
</script>
