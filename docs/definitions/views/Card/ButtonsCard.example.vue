<template lang="html">
  <div>
    <xui-card-group :items-per-row="3">
      <xui-card>
        <xui-card-content>
          <xui-card-header>Elliot Fu</xui-card-header>
          <xui-card-meta>Friend</xui-card-meta>
          <xui-card-description>
            Elliot Fu is a film-maker from New York.
          </xui-card-description>
        </xui-card-content>
        <xui-button attached="bottom">
          <xui-icon name="add" /> Add Friend
        </xui-button>
      </xui-card>
      <xui-card>
        <xui-card-content>
          <xui-card-header>Veronika Ossi</xui-card-header>
          <xui-card-meta>Friend</xui-card-meta>
          <xui-card-description>
            Veronika Ossi is a set designer living in New York who enjoys
            kittens, music, and partying.
          </xui-card-description>
        </xui-card-content>
        <xui-button attached="bottom">
          <xui-icon name="add" /> Add Friend
        </xui-button>
      </xui-card>
      <xui-card>
        <xui-card-content>
          <xui-card-header>Jenny Hess</xui-card-header>
          <xui-card-meta>Friend</xui-card-meta>
          <xui-card-description>
            Jenny is a student studying Media Management at the New School
          </xui-card-description>
        </xui-card-content>
        <xui-button attached="bottom">
          <xui-icon name="add" /> Add Friend
        </xui-button>
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsCardExample',
};
</script>
