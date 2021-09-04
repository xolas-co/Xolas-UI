<template lang="html">
  <xui-form>
    <xui-form-field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </xui-form-field>
    <xui-form-field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </xui-form-field>
    <xui-form-field>
      <xui-checkbox label="I agree to the Terms and Conditions" />
    </xui-form-field>
    <xui-button type="submit">Submit</xui-button>
  </xui-form>
</template>

<script>
export default {
  name: 'FormExample',
};
</script>
