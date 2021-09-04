<template lang="html">
  <xui-list>
    <!-- As components -->
    <xui-list-item>
      <xui-list-icon name="users" />
      <xui-list-content>Semantic UI</xui-list-content>
    </xui-list-item>

    <!-- As Prop -->
    <xui-list-item icon="marker" content="New York, NY" />

    <!-- Both -->
    <xui-list-item icon="mail">
      <xui-list-content>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </xui-list-content>
    </xui-list-item>

    <xui-list-item icon="linkify">
      <xui-list-content>
        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
      </xui-list-content>
    </xui-list-item>
  </xui-list>
</template>

<script>
export default {
  name: 'ListIconExample',
};
</script>
