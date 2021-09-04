<template lang="html">
  <div>
    <xui-message
      icon="inbox"
      header="Have you heard about our mailing list?"
      content="Get the best news in your e-mail every day."
    />

    <xui-message icon>
      <xui-icon name="circle notched" loading />
      <xui-message-content>
        <xui-message-header>Just one second</xui-message-header>
        We are fetching that content for you.
      </xui-message-content>
    </xui-message>
  </div>
</template>

<script>
export default {
  name: 'IconMessageExample',
};
</script>
