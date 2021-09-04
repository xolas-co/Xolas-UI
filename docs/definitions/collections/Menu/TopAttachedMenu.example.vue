<template lang="html">
  <div>
    <xui-menu attached="top">
      <xui-dropdown item icon="wrench" simple>
        <xui-dropdown-menu>
          <xui-dropdown-item>
            <xui-icon name="dropdown" />
            <span className="text">New</span>

            <xui-dropdown-menu>
              <xui-dropdown-item>Document</xui-dropdown-item>
              <xui-dropdown-item>Image</xui-dropdown-item>
            </xui-dropdown-menu>
          </xui-dropdown-item>
          <xui-dropdown-item>Open</xui-dropdown-item>
          <xui-dropdown-item>Save...</xui-dropdown-item>
          <xui-dropdown-item>Edit Permissions</xui-dropdown-item>
          <xui-dropdown-divider />
          <xui-dropdown-header>Export</xui-dropdown-header>
          <xui-dropdown-item>Share</xui-dropdown-item>
        </xui-dropdown-menu>
      </xui-dropdown>

      <xui-menu-menu position="right">
        <xui-menu-item right>
          <xui-input transparent icon="search" placeholder="Search..." />
        </xui-menu-item>
      </xui-menu-menu>
    </xui-menu>

    <xui-segment attached="bottom">
      <docs-wireframe name="paragraph" />
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'MenuExample',
};
</script>
