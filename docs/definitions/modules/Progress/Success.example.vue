<template lang="html">
  <div>
    <xui-progress
      state="success"
      :percent="100"
      progress
      label="Everything worked, your file is all ready."
    />
  </div>
</template>

<script>
export default {
  name: 'SuccessProgressExample',
};
</script>
