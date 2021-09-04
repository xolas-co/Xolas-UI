<template lang="html">
  <xui-feed>
    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/helen.jpg" />
      <xui-feed-content>
        <xui-feed-date>3 days ago</xui-feed-date>
        <xui-feed-summary> <a>Helen Troy</a> added 2 photos </xui-feed-summary>
        <xui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </xui-feed-extra>
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesExample',
};
</script>
