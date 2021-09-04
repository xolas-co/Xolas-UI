<template lang="html">
  <xui-step-group>
    <xui-step link active icon="truck">
      <xui-step-content
        title="Shipping"
        description="Choose your shipping options"
      />
    </xui-step>
    <xui-step link>
      <xui-step-content
        title="Billing"
        description="Enter billing information"
      />
    </xui-step>
  </xui-step-group>
</template>

<script>
export default {
  name: 'Link2Example',
};
</script>
