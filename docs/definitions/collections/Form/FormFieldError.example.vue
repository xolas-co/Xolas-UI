<template lang="html">
  <xui-form>
    <xui-form-fields fields="two">
      <xui-form-field error>
        <label>First Name</label>
        <input placeholder="First Name" type="text" />
      </xui-form-field>
      <xui-form-field>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text" />
      </xui-form-field>
    </xui-form-fields>
    <xui-form-field error>
      <label>Gender</label>
      <xui-dropdown
        placeholder="Gender"
        selection
        :options="options"
        v-model="current"
      />
    </xui-form-field>
    <xui-form-field inline error>
      <xui-checkbox label="I agree to the Terms and Conditions" />
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'FormFieldErrorExample',
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
