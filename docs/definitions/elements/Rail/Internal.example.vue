<template lang="html">
  <xui-segment class="container">
    <xui-rail internal position="left">
      <xui-segment>Left Rail Content</xui-segment>
    </xui-rail>

    <xui-rail internal position="right">
      <xui-segment>Right Rail Content</xui-segment>
    </xui-rail>
  </xui-segment>
</template>

<script>
export default {
  name: 'InternalExample',
};
</script>

<style media="screen" scoped>
.container {
  min-height: 300px;
  width: 960px;
}
</style>
