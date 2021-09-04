<template lang="html">
  <xui-form warning>
    <xui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </xui-form-field>
    <xui-message warning>
      <xui-message-header>Could you check something!</xui-message-header>
      <xui-message-list>
        <xui-message-item>
          That e-mail has been subscribed, but you have not yet clicked the
          verification link in your e-mail.
        </xui-message-item>
      </xui-message-list>
    </xui-message>
    <xui-button type="submit">Submit</xui-button>
  </xui-form>
</template>

<script>
export default {
  name: 'FormWarningExample',
};
</script>
