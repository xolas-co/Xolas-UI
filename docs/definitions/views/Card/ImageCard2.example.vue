<template lang="html">
  <div>
    <xui-card-group :items-per-row="3">
      <xui-card>
        <xui-dimmer-dimmable
          @mouseenter.native="cardOneActive = true"
          @mouseleave.native="cardOneActive = false"
        >
          <xui-image src="static/images/avatar/large/elliot.jpg" />
          <xui-dimmer blurring :active="cardOneActive">
            <xui-button inverted>Add Friend</xui-button>
          </xui-dimmer>
        </xui-dimmer-dimmable>
        <xui-card-content>
          <xui-card-header>Team Fu</xui-card-header>
          <xui-card-meta>Create in Sep 2014</xui-card-meta>
        </xui-card-content>
        <xui-card-content extra>
          <xui-icon name="users" /> 2 Members
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-dimmer-dimmable
          @mouseenter.native="cardTwoActive = true"
          @mouseleave.native="cardTwoActive = false"
        >
          <xui-image src="static/images/avatar/large/jenny.jpg" />
          <xui-dimmer blurring inverted :active="cardTwoActive">
            <xui-button primary>Add Friend</xui-button>
          </xui-dimmer>
        </xui-dimmer-dimmable>
        <xui-card-content>
          <xui-card-header>Team Hess</xui-card-header>
          <xui-card-meta>Create in Aug 2014</xui-card-meta>
        </xui-card-content>
        <xui-card-content extra>
          <xui-icon name="users" /> 2 Members
        </xui-card-content>
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ImageCard2Example',
  data() {
    return {
      cardOneActive: false,
      cardTwoActive: false,
    };
  },
};
</script>
