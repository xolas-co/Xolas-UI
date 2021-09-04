<template lang="html">
  <xui-segments>
    <xui-segment>
      <p>Top</p>
    </xui-segment>
    <xui-segments>
      <xui-segment>
        <p>Nested Top 1</p>
      </xui-segment>
      <xui-segment>
        <p>Nested Top 2</p>
      </xui-segment>
    </xui-segments>
    <xui-segment>
      <p>Middle</p>
    </xui-segment>
    <xui-segments horizontal>
      <xui-segment>Top</xui-segment>
      <xui-segment>Middle</xui-segment>
      <xui-segment>Bottom</xui-segment>
    </xui-segments>
    <xui-segment>
      <p>Bottom</p>
    </xui-segment>
  </xui-segments>
</template>

<script>
export default {
  name: 'NestedSegmentsExample',
};
</script>
