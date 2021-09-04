<template lang="html">
  <xui-search action="search category">
    <template v-slot:input="{ props, handlers }">
      <xui-input
        v-bind="props"
        v-on="handlers"
        icon="search"
        placeholder="Common animals..."
      />
    </template>
  </xui-search>
</template>

<script>
export default {
  name: 'SearchCategory',
};
</script>
