<template lang="html">
  <div>
    <xui-progress
      state="error"
      :percent="100"
      progress
      label="There was an error."
    />
  </div>
</template>

<script>
export default {
  name: 'ErrorProgressExample',
};
</script>
