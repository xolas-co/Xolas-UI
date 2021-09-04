<template>
  <div>
    <xui-button @click="toggleDisabled">Toggle Disabled Tab</xui-button>

    <xui-divider hidden />

    <xui-tab>
      <xui-tab-pane title="Circle">
        Circle
      </xui-tab-pane>
      <xui-tab-pane title="Box">
        Box
      </xui-tab-pane>
      <xui-tab-pane title="Secret Triangle" :disabled="disabled">
        Secret Triangle
      </xui-tab-pane>
    </xui-tab>
  </div>
</template>

<script>
export default {
  name: 'DisabledExample',
  data: () => ({
    disabled: true,
  }),
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
