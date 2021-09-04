<template lang="html">
  <div>
    <xui-rating :rating="value" :max-rating="5" />
  </div>
</template>

<script>
export default {
  name: 'RatingExample',
  data() {
    return { value: 1 };
  },
};
</script>

<style lang="css"></style>
