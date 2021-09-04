<template>
  <div>
    <xui-tab :menu="{ vertical: true, fluid: true, tabular: true }">
      <xui-tab-pane title="Circle">
        Circle
      </xui-tab-pane>
      <xui-tab-pane title="Box">
        Box
      </xui-tab-pane>
      <xui-tab-pane title="Triangle">
        Triangle
      </xui-tab-pane>
    </xui-tab>
  </div>
</template>

<script>
export default {
  name: 'VerticalTabularExample',
};
</script>
