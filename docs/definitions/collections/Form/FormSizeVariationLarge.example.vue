<template lang="html">
  <xui-form size="large">
    <xui-form-fields fields="two">
      <xui-form-field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </xui-form-field>
      <xui-form-field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </xui-form-field>
    </xui-form-fields>
    <xui-button type="submit">Submit</xui-button>
  </xui-form>
</template>

<script>
export default {
  name: 'FormSizeVariationLargeExample',
};
</script>
