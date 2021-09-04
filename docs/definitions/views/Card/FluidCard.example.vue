<template lang="html">
  <div>
    <xui-grid :columns="3">
      <xui-grid-column>
        <xui-card class="fluid">
          <xui-image src="static/images/avatar/large/daniel.jpg" />
          <xui-card-content>
            <xui-card-header>Daniel Louise</xui-card-header>
          </xui-card-content>
        </xui-card>
      </xui-grid-column>
      <xui-grid-column>
        <xui-card class="fluid">
          <xui-image src="static/images/avatar/large/helen.jpg" />
          <xui-card-content>
            <xui-card-header>Helen Troy</xui-card-header>
          </xui-card-content>
        </xui-card>
      </xui-grid-column>
      <xui-grid-column>
        <xui-card class="fluid">
          <xui-image src="static/images/avatar/large/elliot.jpg" />
          <xui-card-content>
            <xui-card-header>Elliot Fu</xui-card-header>
          </xui-card-content>
        </xui-card>
      </xui-grid-column>
    </xui-grid>
  </div>
</template>

<script>
export default {
  name: 'FluidCardExample',
};
</script>
