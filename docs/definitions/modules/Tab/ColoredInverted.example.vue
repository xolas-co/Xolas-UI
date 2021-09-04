<template>
  <div>
    <select v-model="selectedColor">
      <option v-for="color in colors" :key="color" :value="color">
        {{ color }}
      </option>
    </select>

    <xui-divider hidden />

    <xui-tab
      :menu="{
        color: selectedColor,
        inverted: true,
        attached: false,
        tabular: false,
      }"
    >
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
  name: 'ColoredExample',
  data: () => ({
    selectedColor: 'blue',
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
  }),
};
</script>
