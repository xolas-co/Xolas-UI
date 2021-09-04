<template lang="html">
  <div>
    <xui-step-group step-number="three" attached="top">
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
    <xui-segment attached>
      <docs-wireframe name="paragraph" />
    </xui-segment>
    <xui-step-group step-number="three" attached="bottom">
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
  name: 'AttachedExample',
};
</script>
