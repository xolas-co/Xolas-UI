<template lang="html">
  <div>
    <xui-card>
      <xui-card-content>
        <xui-card-header
          >Cute Dog
          <xui-icon class="right floated" size="small" name="like" />
          <xui-icon class="right floated" size="small" name="star" />
        </xui-card-header>
        <xui-image src="static/images/wireframes/paragraph.png" />
      </xui-card-content>
      <xui-card-content extra>
        <span> <xui-icon name="heart" /> Like </span>
        <span slot="right"> <xui-icon name="star" /> Favorite </span>
      </xui-card-content>
    </xui-card>
  </div>
</template>

<script>
export default {
  name: 'ApprovalCardExample',
};
</script>
