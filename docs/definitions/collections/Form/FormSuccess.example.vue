<template lang="html">
  <xui-form success>
    <xui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </xui-form-field>
    <xui-message success>
      <xui-message-header>Form Completed</xui-message-header>
      <p>
        You're all signed up for the newsletter.
      </p>
    </xui-message>
    <xui-button type="submit">Submit</xui-button>
  </xui-form>
</template>

<script>
export default {
  name: 'FormSuccessExample',
};
</script>
