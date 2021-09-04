<template lang="html">
  <xui-step-group step-number="three">
    <xui-step title="Shipping" icon="plane" />
    <xui-step active title="Billing" icon="dollar" />
    <xui-step disabled title="Confirm Order" icon="info circle" />
  </xui-step-group>
</template>

<script>
export default {
  name: 'EvenlyDividedExample',
};
</script>
