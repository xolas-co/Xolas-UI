<template lang="html">
  <div>
    <xui-card-group :items-per-row="6" class="doubling">
      <xui-card>
        <xui-image src="static/images/avatar/large/elliot.jpg" />
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/helen.jpg" />
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/jenny.jpg" />
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/veronika.jpg" />
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/stevie.jpg" />
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/steve.jpg" />
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'DoublingCardExample',
};
</script>
