<template lang="html">
  <div>
    <xui-card class="raised">
      <xui-card-content>
        <xui-card-header>Cute Dog</xui-card-header>
        <xui-card-meta
          >Animals
          <span class="right floated">2 days ago</span>
        </xui-card-meta>
        <xui-image src="/static/images/wireframes/paragraph.png" />
      </xui-card-content>
      <xui-card-content extra>
        <span slot="right">
          <xui-image
            src="/static/images/avatar/small/matt.jpg"
            shape="circular"
            size="mini"
          />
          Matt
        </span>
      </xui-card-content>
    </xui-card>
  </div>
</template>

<script>
export default {
  name: 'FloatedContentCardExample',
};
</script>
