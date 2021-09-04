<template lang="html">
  <xui-search disabled>
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
  name: 'SearchDisabled',
};
</script>
