<template>
  <xui-grid :columns="3" relaxed="very">
    <xui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </xui-grid-column>
    <xui-divider vertical>and</xui-divider>
    <xui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </xui-grid-column>
    <xui-divider vertical>or</xui-divider>
    <xui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {
  name: 'VerticalDivider',
};
</script>
