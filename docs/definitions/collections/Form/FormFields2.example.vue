<template lang="html">
  <xui-form>
    <xui-form-fields fields="three">
      <xui-form-field>
        <label>First name</label>
        <input type="text" placeholder="First Name" />
      </xui-form-field>
      <xui-form-field>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name" />
      </xui-form-field>
      <xui-form-field>
        <label>Last name</label>
        <input type="text" placeholder="Last Name" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'FormFields2Example',
};
</script>
