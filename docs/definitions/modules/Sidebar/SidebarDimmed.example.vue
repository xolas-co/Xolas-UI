<template lang="html">
  <div>
    <xui-segment>
      <xui-checkbox label="visible" v-model="visible" />
    </xui-segment>
    <xui-sidebar-pushable>
      <xui-menu
        is="xui-sidebar"
        :visible="visible"
        animation="overlay"
        width="thin"
        icon="labeled"
        inverted
        vertical
      >
        <xui-menu-item to="/"> <xui-icon name="home" /> Home </xui-menu-item>
        <xui-menu-item to="/">
          <xui-icon name="gamepad" /> Games
        </xui-menu-item>
        <xui-menu-item to="/">
          <xui-icon name="camera" /> Channels
        </xui-menu-item>
      </xui-menu>
      <xui-sidebar-pusher :dimmed="visible">
        <xui-segment>
          <h3 is="xui-header">Application Content</h3>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-sidebar-pusher>
    </xui-sidebar-pushable>
  </div>
</template>

<script>
export default {
  name: 'SidebarDimmed',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
