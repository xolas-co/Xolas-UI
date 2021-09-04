<template lang="html">
  <div>
    <xui-step-group stackable>
      <xui-step
        title="Shipping"
        description="Choose your shipping options"
        icon="plane"
      />
      <xui-step
        active
        title="Billing"
        description="Enter billing information"
        icon="dollar"
      />
      <xui-step
        disabled
        title="Confirm Order"
        description="Verify order details"
        icon="info circle"
      />
    </xui-step-group>
  </div>
</template>

<script>
export default {
  name: 'StackableExample',
};
</script>
