<template>
  <div>
    <xui-image-group size="tiny">
      <xui-image :src="src" />
      <xui-image :src="src" />
      <xui-image :src="src" />
      <xui-image :src="src" />
    </xui-image-group>
    <xui-divider hidden />
    <xui-image-group size="small">
      <xui-image :src="src" />
      <xui-image :src="src" />
      <xui-image :src="src" />
      <xui-image :src="src" />
    </xui-image-group>
  </div>
</template>

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
