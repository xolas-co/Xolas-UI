<template lang="html">
  <div>
    <xui-step-group ordered>
      <xui-step completed>
        <xui-step-content>
          <xui-step-title>Shipping</xui-step-title>
          <xui-step-description
            >Choose your shipping options</xui-step-description
          >
        </xui-step-content>
      </xui-step>

      <xui-step
        completed
        title="Billing"
        description="Enter billing information"
      />

      <xui-step
        active
        title="Confirm Order"
        description="Verify order details"
      />
    </xui-step-group>
  </div>
</template>

<script>
export default {
  name: 'OrderedExample',
};
</script>
