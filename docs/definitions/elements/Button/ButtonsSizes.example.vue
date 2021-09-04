<template lang="html">
  <div>
    <xui-button-group size="large">
      <xui-button content="One" />
      <xui-button content="Two" />
      <xui-button content="Three" />
    </xui-button-group>
    <xui-divider />
    <xui-button-group icons size="small">
      <xui-button icon="file" />
      <xui-button icon="save" />
      <xui-button icon="upload" />
      <xui-button icon="download" />
    </xui-button-group>
    <xui-divider />
    <xui-button-group size="large">
      <xui-button content="One" />
      <xui-button-or />
      <xui-button content="Two" />
    </xui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSizesExample',
};
</script>
