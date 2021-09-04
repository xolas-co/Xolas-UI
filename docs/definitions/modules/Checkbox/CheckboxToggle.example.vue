<template lang="html">
  <div>
    <xui-checkbox label="toggle" toggle v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'CheckboxToggleExample',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css"></style>
