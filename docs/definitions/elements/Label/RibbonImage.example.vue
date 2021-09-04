<template>
  <xui-grid :columns="2">
    <xui-grid-column>
      <xui-image fluid src="static/images/wireframes/image.png">
        <a is="xui-label" color="black" icon="hotel" slot="label" ribbon>
          Hotel
        </a>
      </xui-image>
    </xui-grid-column>

    <xui-grid-column>
      <xui-image fluid src="static/images/wireframes/image.png">
        <a is="xui-label" color="blue" icon="spoon" slot="label" ribbon>
          Hotel
        </a>
      </xui-image>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {};
</script>
