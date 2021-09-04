<template lang="html">
  <xui-comment-group minimal>
    <h3 is="xui-header" dividing>Comments</h3>

    <xui-comment>
      <xui-comment-avatar src="static/images/avatar/small/matt.jpg" />
      <xui-comment-content>
        <a is="xui-comment-author">Matt</a>
        <xui-comment-metadata>
          <div>Today at 5:42PM</div>
        </xui-comment-metadata>
        <xui-comment-text>How artistic!</xui-comment-text>
        <xui-comment-actions>
          <xui-comment-action>Reply</xui-comment-action>
        </xui-comment-actions>
      </xui-comment-content>
    </xui-comment>

    <xui-comment>
      <xui-comment-avatar src="static/images/avatar/small/elliot.jpg" />
      <xui-comment-content>
        <a is="xui-comment-author">Elliot Fu</a>
        <xui-comment-metadata>
          <div>Yesterday at 12:30AM</div>
        </xui-comment-metadata>
        <xui-comment-text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </xui-comment-text>
        <xui-comment-actions>
          <xui-comment-action>Reply</xui-comment-action>
        </xui-comment-actions>
      </xui-comment-content>
      <xui-comment-group>
        <xui-comment>
          <xui-comment-avatar src="static/images/avatar/small/jenny.jpg" />
          <xui-comment-content>
            <a is="xui-comment-author">Jenny Hess</a>
            <xui-comment-metadata>
              <div>Just now</div>
            </xui-comment-metadata>
            <xui-comment-text>
              Elliot you are always so right :)
            </xui-comment-text>
            <xui-comment-actions>
              <xui-comment-action>Reply</xui-comment-action>
            </xui-comment-actions>
          </xui-comment-content>
        </xui-comment>
      </xui-comment-group>
    </xui-comment>

    <xui-comment>
      <xui-comment-avatar src="static/images/avatar/small/joe.jpg" />
      <xui-comment-content>
        <a is="xui-comment-author">Joe Henderson</a>
        <xui-comment-metadata>
          <div>5 days ago</div>
        </xui-comment-metadata>
        <xui-comment-text>
          Dude, this is awesome. Thanks so much
        </xui-comment-text>
        <xui-comment-actions>
          <xui-comment-action>Reply</xui-comment-action>
        </xui-comment-actions>
      </xui-comment-content>
    </xui-comment>

    <xui-form reply>
      <textarea />
      <xui-button
        content="Add Reply"
        label-position="left"
        icon="edit"
        primary
      />
    </xui-form>
  </xui-comment-group>
</template>

<script>
export default {
  name: 'MinimalExample',
};
</script>
