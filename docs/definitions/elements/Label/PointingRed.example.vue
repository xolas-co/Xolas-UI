<template>
  <xui-form>
    <xui-form-field>
      <input type="text" placeholder="First name" />
      <xui-label basic color="red" pointing>Please enter a value</xui-label>
    </xui-form-field>
    <xui-divider />

    <xui-form-field>
      <xui-label basic color="red" pointing="below"
        >Please enter a value</xui-label
      >
      <input type="text" placeholder="Last Name" />
    </xui-form-field>
    <xui-divider />

    <xui-form-field inline>
      <input type="text" placeholder="Username" />
      <xui-label basic color="red" pointing="left"
        >That name is taken!</xui-label
      >
    </xui-form-field>
    <xui-divider />

    <xui-form-field inline>
      <xui-label basic color="red" pointing="right">
        Your password must be 6 characters or more
      </xui-label>
      <input type="password" placeholder="Password" />
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'PointingExample',
};
</script>
