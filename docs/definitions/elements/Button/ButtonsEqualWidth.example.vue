<template lang="html">
  <div>
    <xui-button-group :widths="5">
      <xui-button content="Overview" />
      <xui-button content="Specs" />
      <xui-button content="Warranty" />
      <xui-button content="Reviews" />
      <xui-button content="Support" />
    </xui-button-group>
    <xui-button-group :widths="3">
      <xui-button content="Overview" />
      <xui-button content="Specs" />
      <xui-button content="Support" />
    </xui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsEqualWidthExample',
};
</script>
