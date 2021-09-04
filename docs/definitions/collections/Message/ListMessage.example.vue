<template lang="html">
  <div>
    <xui-message>
      <xui-message-header>New Site Features</xui-message-header>
      <xui-message-list>
        <xui-message-item>
          You can now have cover images on blog pages
        </xui-message-item>
        <xui-message-item>
          Drafts will now auto-save while writing
        </xui-message-item>
      </xui-message-list>
    </xui-message>

    <xui-message header="New Site Features" :list="list" />
  </div>
</template>

<script>
export default {
  name: 'MessageListExample',
  data() {
    return {
      list: [
        'You can now have cover images on blog pages',
        'Drafts will now auto-save while writing',
      ],
    };
  },
};
</script>
