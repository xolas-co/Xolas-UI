<template lang="html">
  <xui-search loading>
    <template v-slot:input="{ props, handlers }">
      <xui-input
        v-bind="props"
        v-on="handlers"
        placeholder="Search..."
        icon="search"
      />
    </template>
  </xui-search>
</template>

<script>
export default {
  name: 'SearchLoading',
};
</script>
