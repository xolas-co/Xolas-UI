<template lang="html">
  <xui-feed size="large">
    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/elliot.jpg" />
      <xui-feed-content>
        <xui-feed-summary>
          <xui-feed-user>Elliot Fu</xui-feed-user> added you as a friend
          <xui-feed-date>1 Hour Ago</xui-feed-date>
        </xui-feed-summary>
        <xui-feed-meta>
          <xui-feed-like>
            <xui-icon name="like" />
            4 Likes
          </xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label icon="pencil" />
      <xui-feed-content>
        <xui-feed-summary>
          You submitted a new post to the page
          <xui-feed-date>3 days ago</xui-feed-date>
        </xui-feed-summary>
        <xui-feed-extra text>
          I'm having a BBQ this weekend. Come by around 4pm if you can.
        </xui-feed-extra>
        <xui-feed-meta>
          <xui-feed-like>11 Likes</xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/helen.jpg" />
      <xui-feed-content>
        <xui-feed-date>4 days ago</xui-feed-date>
        <xui-feed-summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
        </xui-feed-summary>

        <xui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </xui-feed-extra>

        <xui-feed-meta like="1 Like" />
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'SizeLargeExample',
};
</script>
