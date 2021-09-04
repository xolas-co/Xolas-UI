<template lang="html">
  <div>
    <xui-segment attached="top">
      <p>This segment is on top</p>
    </xui-segment>
    <xui-segment attached>
      <p>This segment is attached on both sides</p>
    </xui-segment>
    <xui-segment attached="bottom">
      <p>This segment is on bottom</p>
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'AttachedExample',
};
</script>
