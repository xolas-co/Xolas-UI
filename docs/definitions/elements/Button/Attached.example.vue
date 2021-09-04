<template lang="html">
  <div>
    <div is="xui-button" attached="top" content="Top" />
    <xui-segment attached>
      <docs-wireframe name="paragraph" />
    </xui-segment>
    <div is="xui-button" attached="bottom" content="Bottom" />
  </div>
</template>

<script>
export default {
  name: 'ButtonAttachedExample',
};
</script>
