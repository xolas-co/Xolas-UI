<template lang="html">
  <div>
    <xui-step-group>
      <xui-step>
        <xui-icon name="truck" />
        <xui-step-content>
          <xui-step-title>Shipping</xui-step-title>
          <xui-step-description
            >Choose your shipping options</xui-step-description
          >
        </xui-step-content>
      </xui-step>

      <xui-step active>
        <xui-icon name="payment" />
        <!-- Shorthand -->
        <xui-step-content
          title="Billing"
          description="Enter billing information"
        />
      </xui-step>

      <xui-step disabled>
        <xui-icon name="info" />
        <xui-step-content disabled title="Confirm Order" />
      </xui-step>
    </xui-step-group>

    <!-- Shorthand -->
    <xui-step-group :steps="steps" />
  </div>
</template>

<script>
export default {
  name: 'StepExample',
  data() {
    return {
      steps: [
        {
          icon: 'truck',
          name: 'Shipping',
          description: 'Choose your shipping options',
        },
        {
          active: true,
          icon: 'payment',
          name: 'Billing',
          description: 'Enter billing information',
        },
        {
          disabled: true,
          icon: 'info',
          name: 'Confirm Order',
        },
      ],
    };
  },
};
</script>
