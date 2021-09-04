<template lang="html">
  <xui-form>
    <xui-form-field>
      <select v-model="current" placeholder="Gender">
        <option disabled value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'FormHTMLSelectExample',
  data() {
    return {
      current: '',
    };
  },
};
</script>
