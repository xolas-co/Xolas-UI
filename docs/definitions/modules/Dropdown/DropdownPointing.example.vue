<template lang="html">
  <div id="app">
    <xui-dropdown text="Options" button pointing>
      <xui-dropdown-menu>
        <xui-dropdown-item>Settings</xui-dropdown-item>
        <xui-dropdown-item>Manage apps</xui-dropdown-item>
        <xui-dropdown-item>Help</xui-dropdown-item>
      </xui-dropdown-menu>
    </xui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownPointingExample',
};
</script>
