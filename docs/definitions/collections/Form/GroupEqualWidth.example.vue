<template lang="html">
  <xui-form>
    <xui-form-fields>
      <xui-form-field>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </xui-form-field>
      <xui-form-field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </xui-form-field>
    </xui-form-fields>
    <xui-form-fields equal-width>
      <xui-form-field>
        <label>First name</label>
        <input type="text" placeholder="First name" />
      </xui-form-field>
      <xui-form-field>
        <label>Middle name</label>
        <input type="text" placeholder="Middle name" />
      </xui-form-field>
      <xui-form-field>
        <label>Last name</label>
        <input type="text" placeholder="Last name" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'GroupEqualWidthExample',
};
</script>
