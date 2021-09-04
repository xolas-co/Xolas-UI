<template lang="html">
  <xui-feed>
    <xui-feed-event>
      <xui-feed-label>
        <xui-image src="static/images/avatar/small/jenny.jpg" />
      </xui-feed-label>
      <xui-feed-content>
        <xui-feed-summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          <xui-feed-date>3 days ago</xui-feed-date>
        </xui-feed-summary>
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'SummaryDateExample',
};
</script>
