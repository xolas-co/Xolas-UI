<template lang="html">
  <xui-form>
    <xui-form-field>
      <label>Gender</label>
      <xui-dropdown
        placeholder="Gender"
        selection
        :options="options"
        v-model="current"
      />
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'FormDropdownExample',
  data() {
    return {
      current: null,
      options: [
        {
          text: 'Male',
          value: 1,
        },
        {
          text: 'Female',
          value: 2,
        },
      ],
    };
  },
};
</script>
