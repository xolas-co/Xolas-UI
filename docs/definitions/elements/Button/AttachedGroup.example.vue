<template lang="html">
  <div>
    <xui-button-group attached="top">
      <div is="xui-button" content="One" />
      <div is="xui-button" content="Two" />
    </xui-button-group>
    <xui-segment attached>
      <docs-wireframe name="paragraph" />
    </xui-segment>
    <xui-button-group attached="bottom">
      <div is="xui-button" content="One" active />
      <div is="xui-button" content="Two" />
    </xui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonAttachedExample',
};
</script>
