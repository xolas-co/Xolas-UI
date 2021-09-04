<template lang="html">
  <xui-grid>
    <xui-grid-column :width="6">
      <xui-image src="static/images/wireframes/image.png">
        <xui-label slot="corner" corner="left"
          ><xui-icon name="save"
        /></xui-label>
      </xui-image>
    </xui-grid-column>

    <xui-grid-column :width="6">
      <xui-image wrapped src="static/images/wireframes/image.png">
        <xui-label slot="corner" corner="right"
          ><xui-icon name="cancel"
        /></xui-label>
      </xui-image>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {};
</script>

<style lang="css"></style>
