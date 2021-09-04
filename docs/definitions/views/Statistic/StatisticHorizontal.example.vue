<template lang="html">
  <div>
    <div class="single-example">
      <xui-statistic horizontal>
        <xui-statistic-value>2,204</xui-statistic-value>
        <xui-statistic-label>Views</xui-statistic-label>
      </xui-statistic>
    </div>
    <div class="single-example">
      <xui-statistics-group horizontal>
        <xui-statistic in-group>
          <xui-statistic-value>22</xui-statistic-value>
          <xui-statistic-label>Faves</xui-statistic-label>
        </xui-statistic>
        <xui-statistic in-group>
          <xui-statistic-value>31,200</xui-statistic-value>
          <xui-statistic-label>Views</xui-statistic-label>
        </xui-statistic>
        <xui-statistic in-group>
          <xui-statistic-value>22</xui-statistic-value>
          <xui-statistic-label>Members</xui-statistic-label>
        </xui-statistic>
      </xui-statistics-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticHorizontalExample',
};
</script>

<style>
.single-example {
  padding: 20px 0;
}
</style>
