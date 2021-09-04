<template lang="html">
  <div>
    <a>
      <xui-card>
        <xui-card-content>
          <xui-card-header>Cute Dog</xui-card-header>
          <xui-card-meta>Animals</xui-card-meta>
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
    </a>
  </div>
</template>

<script>
export default {
  name: 'LinkCard1Example',
};
</script>
