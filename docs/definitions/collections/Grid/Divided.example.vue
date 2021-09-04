<template lang="html">
  <xui-grid :columns="3" divided>
    <xui-grid-row v-for="(row, i) in [, ,]" :key="i">
      <xui-grid-column v-for="(col, j) in [, , ,]" :key="j">
        <docs-wireframe name="media-paragraph" />
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {
  name: 'DividedExample',
};
</script>
