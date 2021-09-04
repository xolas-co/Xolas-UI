<template lang="html">
  <xui-feed>
    <xui-feed-event>
      <xui-feed-label>
        <img src="static/images/avatar/small/elliot.jpg" />
      </xui-feed-label>
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
      <xui-feed-label image="static/images/avatar/small/helen.jpg" />
      <xui-feed-content>
        <xui-feed-summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <xui-feed-date>4 days ago</xui-feed-date>
        </xui-feed-summary>
        <xui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </xui-feed-extra>
        <xui-feed-meta>
          <xui-feed-like>
            <xui-icon name="like" />
            1 Like
          </xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/jenny.jpg" />
      <xui-feed-content>
        <xui-feed-summary
          date="2 Days Ago"
          user="Jenny Hess"
          content=" add you as a friend"
        />
        <xui-feed-meta>
          <xui-feed-like>
            <xui-icon name="like" />
            8 Likes
          </xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/joe.jpg" />
      <xui-feed-content>
        <xui-feed-summary>
          <a>Joe Henderson</a> posted on his page
          <xui-feed-date>3 days ago</xui-feed-date>
        </xui-feed-summary>
        <xui-feed-extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </xui-feed-extra>
        <xui-feed-meta>
          <xui-feed-like>
            <xui-icon name="like" />
            5 Likes
          </xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label image="static/images/avatar/small/justen.jpg" />
      <xui-feed-content>
        <xui-feed-summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <xui-feed-date>4 days ago</xui-feed-date>
        </xui-feed-summary>
        <xui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </xui-feed-extra>
        <xui-feed-meta>
          <xui-feed-like>
            <xui-icon name="like" />
            41 Likes
          </xui-feed-like>
        </xui-feed-meta>
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'FeedExample',
};
</script>
