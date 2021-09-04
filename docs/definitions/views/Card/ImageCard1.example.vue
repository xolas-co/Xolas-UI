<template lang="html">
  <div>
    <xui-card>
      <xui-reveal animated="move">
        <xui-reveal-content visible>
          <xui-image src="static/images/avatar/large/jenny.jpg" />
        </xui-reveal-content>
        <xui-reveal-content hidden>
          <xui-image src="static/images/avatar/large/elliot.jpg" />
        </xui-reveal-content>
      </xui-reveal>
      <xui-card-content>
        <xui-card-header>Team Fu &amp; Hess</xui-card-header>
        <xui-card-meta>Create in Sep 2014</xui-card-meta>
      </xui-card-content>
      <xui-card-content extra>
        <xui-icon name="users" />
        2 Members
      </xui-card-content>
    </xui-card>
  </div>
</template>

<script>
export default {
  name: 'ImageCard1Example',
};
</script>
