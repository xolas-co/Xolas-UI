<template lang="html">
  <div>
    <xui-button animated>
      <xui-button-content visible>Next</xui-button-content>
      <xui-button-content hidden>
        <xui-icon name="right arrow" />
      </xui-button-content>
    </xui-button>

    <xui-button animated="vertical">
      <xui-button-content hidden>Shop</xui-button-content>
      <xui-button-content visible>
        <xui-icon name="shop" />
      </xui-button-content>
    </xui-button>

    <xui-button animated="fade">
      <xui-button-content visible>
        Sign-up for a Pro account
      </xui-button-content>
      <xui-button-content hidden>
        $12.99 a month
      </xui-button-content>
    </xui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAnimatedExample',
};
</script>
