<template lang="html">
  <div>
    <xui-card-group :items-per-row="3">
      <xui-card>
        <xui-image src="static/images/avatar/large/matthew.png" />
        <xui-card-content>
          <xui-card-header>Matt Giampietro</xui-card-header>
          <xui-card-meta>Friends</xui-card-meta>
          <xui-card-description>
            Matthew is an interior designer living in New York.
          </xui-card-description>
        </xui-card-content>
        <xui-card-content extra>
          <xui-icon name="user" /> 75 Friends
          <span slot="right">Joined in 2013</span>
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/molly.png" />
        <xui-card-content>
          <xui-card-header>Molly</xui-card-header>
          <xui-card-meta>Coworker</xui-card-meta>
          <xui-card-description>
            Molly is a personal assistant living in Paris.
          </xui-card-description>
        </xui-card-content>
        <xui-card-content extra>
          <xui-icon name="user" /> 35 Friends
          <span slot="right">Joined in 2011</span>
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/avatar/large/elyse.png" />
        <xui-card-content>
          <xui-card-header>Elyse</xui-card-header>
          <xui-card-meta>Coworker</xui-card-meta>
          <xui-card-description>
            Elyse is a copywriter working in New York.
          </xui-card-description>
        </xui-card-content>
        <xui-card-content extra>
          <xui-icon name="user" /> 151 Friends
          <span slot="right">Joined in 2014</span>
        </xui-card-content>
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'Card1Example',
};
</script>
