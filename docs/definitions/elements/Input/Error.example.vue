<template lang="html">
  <xui-input placeholder="Search..." type="text" :error="hasError" />
</template>

<script>
export default {
  name: 'ErrorExample',
  data() {
    return {
      hasError: true,
    };
  },
};
</script>
