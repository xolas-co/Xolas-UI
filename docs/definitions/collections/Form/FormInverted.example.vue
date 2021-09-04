<template lang="html">
  <xui-segment inverted>
    <xui-form inverted>
      <xui-form-fields fields="two">
        <xui-form-field>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </xui-form-field>
        <xui-form-field>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </xui-form-field>
      </xui-form-fields>
      <xui-form-field inline>
        <xui-checkbox label="I agree to the Terms and Conditions" />
      </xui-form-field>
      <xui-button type="submit">Submit</xui-button>
    </xui-form>
  </xui-segment>
</template>

<script>
export default {
  name: 'FormInvertedExample',
};
</script>
