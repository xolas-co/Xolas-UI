<template lang="html">
  <xui-sidebar-pushable>
    <xui-menu
      is="xui-sidebar"
      :visible="true"
      animation="overlay"
      width="thin"
      icon="labeled"
      inverted
      vertical
    >
      <xui-menu-item to="/"> <xui-icon name="home" /> Home </xui-menu-item>
      <xui-menu-item to="/"> <xui-icon name="gamepad" /> Games </xui-menu-item>
      <xui-menu-item to="/">
        <xui-icon name="camera" /> Channels
      </xui-menu-item>
    </xui-menu>
    <xui-sidebar-pusher>
      <xui-segment>
        <h3 is="xui-header">Application Content</h3>
        <docs-wireframe name="paragraph" />
      </xui-segment>
    </xui-sidebar-pusher>
  </xui-sidebar-pushable>
</template>

<script>
export default {
  name: 'SidebarVisible',
};
</script>
