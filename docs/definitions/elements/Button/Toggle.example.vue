<template lang="html">
  <xui-button
    toggle
    content="Vote"
    :active="isActive"
    @click="isActive = !isActive"
  />
</template>

<script>
export default {
  name: 'ButtonToggleExample',
  data: () => ({
    isActive: false,
  }),
};
</script>
