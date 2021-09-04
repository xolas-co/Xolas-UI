<template lang="html">
  <xui-step-group>
    <a is="xui-step" active icon="truck">
      <xui-step-content
        title="Shipping"
        description="Choose your shipping options"
      />
    </a>
    <a is="xui-step">
      <xui-step-content
        title="Billing"
        description="Enter billing information"
      />
    </a>
  </xui-step-group>
</template>

<script>
export default {
  name: 'LinkExample',
};
</script>
