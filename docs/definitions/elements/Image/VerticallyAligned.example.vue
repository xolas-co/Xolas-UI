<template>
  <div>
    <xui-image :src="src" size="tiny" vertical-align="top" />
    <span>Top Aligned</span>
    <xui-divider />
    <xui-image :src="src" size="tiny" vertical-align="middle" />
    <span>Middle Aligned</span>
    <xui-divider />
    <xui-image :src="src" size="tiny" vertical-align="bottom" />
    <span>Bottom Aligned</span>
  </div>
</template>

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
