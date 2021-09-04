<template lang="html">
  <div id="app">
    <xui-dropdown class="teal" text="Save" button floating>
      <xui-dropdown-menu>
        <xui-dropdown-item><xui-icon name="edit" />Edit Post</xui-dropdown-item>
        <xui-dropdown-item
          ><xui-icon name="delete" />Remove Post</xui-dropdown-item
        >
        <xui-dropdown-item><xui-icon name="hide" />Hide Post</xui-dropdown-item>
      </xui-dropdown-menu>
    </xui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownFloatingExample',
};
</script>
