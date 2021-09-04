<template lang="html">
  <div>
    <xui-checkbox label="checkbox" v-model="value" />
    <div><strong>value: </strong> {{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxModelExample',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css"></style>
