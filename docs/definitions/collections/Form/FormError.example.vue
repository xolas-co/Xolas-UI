<template lang="html">
  <xui-form error>
    <xui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </xui-form-field>
    <xui-message error>
      <xui-message-header>Action Forbidden</xui-message-header>
      <p>
        You can only sign up for an account once with a given e-mail address.
      </p>
    </xui-message>
    <xui-button type="submit">Submit</xui-button>
  </xui-form>
</template>

<script>
export default {
  name: 'FormErrorExample',
};
</script>
