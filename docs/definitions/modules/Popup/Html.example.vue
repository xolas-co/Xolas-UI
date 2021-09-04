<template>
  <div>
    <xui-popup>
      <xui-popup-header>User Rating</xui-popup-header>
      <xui-popup-content>
        <xui-rating icon="star" :default-rating="3" :max-rating="4" />
      </xui-popup-content>

      <xui-card slot="trigger">
        <xui-image src="static/images/movies/totoro-horizontal.jpg" />
        <xui-card-content>
          <xui-card-header>My Neighbor Totoro</xui-card-header>
          <xui-card-description>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </xui-card-description>
        </xui-card-content>
      </xui-card>
    </xui-popup>
  </div>
</template>

<script>
export default {};
</script>
