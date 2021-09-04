<template>
  <div>
    <p>Active Index {{ activeIndex }}</p>

    <input type="range" max="2" v-model="activeIndex" />

    <xui-divider hidden />

    <xui-tab :active-index.sync="activeIndex">
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
  name: 'ActiveIndexExample',
  data: () => ({
    activeIndex: 1,
  }),
};
</script>
