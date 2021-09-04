<template lang="html">
  <xui-list :items="items" />
</template>

<script>
export default {
  name: 'ListShorthandExample',
  data() {
    return {
      items: ['Apples', 'Pears', 'Oranges'],
    };
  },
};
</script>
