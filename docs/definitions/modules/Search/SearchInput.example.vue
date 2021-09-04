<template lang="html">
  <xui-search>
    <template v-slot:input="{ props, handlers }">
      <xui-input
        v-bind="props"
        v-on="handlers"
        placeholder="Common passwords..."
        icon="search"
      />
    </template>
  </xui-search>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>
