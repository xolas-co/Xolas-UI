<template lang="html">
  <xui-comment-group>
    <xui-comment>
      <xui-comment-avatar src="static/images/avatar/small/christian.jpg" />
      <xui-comment-content>
        <a is="xui-comment-author">Christian Rocha</a>
        <xui-comment-metadata>
          <div>2 days ago</div>
        </xui-comment-metadata>
        <xui-comment-text
          >I'm very interested in this motherboard. Do you know if it'd work in
          an Intel LGA775 CPU socket?</xui-comment-text
        >
        <xui-comment-actions>
          <xui-comment-action>Reply</xui-comment-action>
        </xui-comment-actions>
      </xui-comment-content>
      <xui-comment-group collapsed>
        <xui-comment>
          <xui-comment-avatar src="static/images/avatar/small/elliot.jpg" />
          <xui-comment-content>
            <a is="xui-comment-author">Elliot Fu</a>
            <xui-comment-metadata>
              <div>1 day ago</div>
            </xui-comment-metadata>
            <xui-comment-text>
              No it won't.
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
                  <div>20 minutes ago</div>
                </xui-comment-metadata>
                <xui-comment-text>
                  Maybe it would.
                </xui-comment-text>
                <xui-comment-actions>
                  <xui-comment-action>Reply</xui-comment-action>
                </xui-comment-actions>
              </xui-comment-content>
            </xui-comment>
          </xui-comment-group>
        </xui-comment>
      </xui-comment-group>
    </xui-comment>
  </xui-comment-group>
</template>

<script>
export default {
  name: 'CollapsedExample',
};
</script>
