<template>
  <div>
    <xui-tab :menu="{ attached: 'bottom' }">
      <xui-tab-pane title="Circle" attached="top">
        Circle
      </xui-tab-pane>
      <xui-tab-pane title="Box" attached="top">
        Box
      </xui-tab-pane>
      <xui-tab-pane title="Triangle" attached="top">
        Triangle
      </xui-tab-pane>
    </xui-tab>
  </div>
</template>

<script>
export default {
  name: 'AttachedExample',
};
</script>
