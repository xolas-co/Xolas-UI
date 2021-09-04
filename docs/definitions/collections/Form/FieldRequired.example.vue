<template lang="html">
  <xui-form>
    <xui-form-field required>
      <label>Last name</label>
      <input type="text" placeholder="Last name" />
    </xui-form-field>
    <xui-form-field required inline>
      <xui-checkbox label="I agree to the Terms and Conditions" />
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'FieldRequiredExample',
};
</script>
