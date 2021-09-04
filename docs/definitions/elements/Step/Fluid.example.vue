<template lang="html">
  <xui-grid :columns="2">
    <xui-grid-column>
      <xui-step-group fluid vertical>
        <xui-step
          title="Shipping"
          description="Choose your shipping options"
          icon="plane"
          completed
        />
        <xui-step
          active
          title="Billing"
          description="Enter billing information"
          icon="dollar"
        />
      </xui-step-group>
    </xui-grid-column>
    <xui-grid-column>
      <p>The steps take up the entire column width</p>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {
  name: 'FluidExample',
};
</script>
