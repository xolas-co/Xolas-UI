<template>
  <div>
    <xui-tab :menu="{ borderless: true, attached: false, tabular: false }">
      <xui-tab-pane title="Circle" :attached="false">
        Circle
      </xui-tab-pane>
      <xui-tab-pane title="Box" :attached="false">
        Box
      </xui-tab-pane>
      <xui-tab-pane title="Triangle" :attached="false">
        Triangle
      </xui-tab-pane>
    </xui-tab>
  </div>
</template>

<script>
export default {
  name: 'BorderlessExample',
};
</script>
