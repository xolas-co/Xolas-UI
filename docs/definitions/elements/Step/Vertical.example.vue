<template lang="html">
  <div>
    <xui-step-group vertical>
      <xui-step completed>
        <xui-icon name="truck" />
        <xui-step-content>
          <xui-step-title>Shipping</xui-step-title>
          <xui-step-description
            >Choose your shipping options</xui-step-description
          >
        </xui-step-content>
      </xui-step>

      <xui-step
        completed
        icon="credit card"
        title="Billing"
        description="Enter billing information"
      />
      <xui-step
        active
        icon="info"
        title="Confirm Order"
        description="Verify order details"
      />
    </xui-step-group>
  </div>
</template>

<script>
export default {
  name: 'VerticalExample',
};
</script>
