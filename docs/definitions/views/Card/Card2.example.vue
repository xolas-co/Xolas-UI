<template lang="html">
  <div>
    <xui-card>
      <xui-card-content>
        <xui-image
          src="static/images/avatar/small/elliot.jpg"
          shape="circular"
          size="mini"
        />
        Elliot
        <xui-card-meta slot="right">14h</xui-card-meta>
      </xui-card-content>
      <xui-image src="static/images/wireframes/image.png" />
      <xui-card-content>
        <span slot="right"> <xui-icon name="heart outline" /> 17 likes </span>
        <xui-icon name="comment" /> 3 comments
      </xui-card-content>
      <xui-card-content extra>
        <xui-input
          placeholder="Add Comment"
          icon="heart outline"
          icon-position="left"
          transparent
        />
      </xui-card-content>
    </xui-card>
  </div>
</template>

<script>
export default {
  name: 'Card2Example',
};
</script>
