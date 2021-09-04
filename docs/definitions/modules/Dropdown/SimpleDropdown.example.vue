<template lang="html">
  <xui-dropdown text="File" simple>
    <xui-dropdown-menu>
      <xui-dropdown-item>New</xui-dropdown-item>
      <xui-dropdown-item
        >Open... <span class="description">ctrl + o</span></xui-dropdown-item
      >
      <xui-dropdown-item
        >Save as... <span class="description">ctrl + s</span></xui-dropdown-item
      >
      <xui-dropdown-item
        >Rename <span class="description">ctrl + r</span></xui-dropdown-item
      >
      <xui-dropdown-item>Make a copy</xui-dropdown-item>
      <xui-dropdown-item
        ><xui-icon name="folder" />Move to folder</xui-dropdown-item
      >
      <xui-dropdown-item
        ><xui-icon name="trash" />Move to trash</xui-dropdown-item
      >
      <xui-dropdown-divider />
      <xui-dropdown-item>Download as...</xui-dropdown-item>
    </xui-dropdown-menu>
  </xui-dropdown>
</template>

<script>
export default {
  name: 'SimpleDropdownExample',
};
</script>
