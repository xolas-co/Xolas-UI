<template lang="html">
  <div class="example">
    <xui-segment circular>
      <xui-header>
        Buy Now
        <xui-header sub>$10.99</xui-header>
      </xui-header>
    </xui-segment>
    <xui-segment inverted circular>
      <xui-header inverted>
        Buy Now
        <xui-header sub>$10.99</xui-header>
      </xui-header>
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'CircularExample',
};
</script>

<style>
.example .circular.segment {
  width: 175px;
  height: 175px;
}
</style>
