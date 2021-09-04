<template>
  <div>
    <xui-image :src="src" size="mini" />
    <xui-divider hidden />
    <xui-image :src="src" size="tiny" />
    <xui-divider hidden />
    <xui-image :src="src" size="small" />
    <xui-divider hidden />
    <xui-image :src="src" size="medium" />
    <xui-divider hidden />
    <xui-image :src="src" size="large" />
    <xui-divider hidden />
    <xui-image :src="src" size="big" />
    <xui-divider hidden />
    <xui-image :src="src" size="huge" />
    <xui-divider hidden />
    <xui-image :src="src" size="massive" />
  </div>
</template>

export default ImageExampleSize

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
