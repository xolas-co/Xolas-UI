<template lang="html">
  <div>
    <div class="single-example">
      <xui-statistic>
        <xui-statistic-value>5,550</xui-statistic-value>
        <xui-statistic-label>Downloads</xui-statistic-label>
      </xui-statistic>
    </div>

    <div class="single-example">
      <xui-statistic>
        <xui-statistic-label>Downloads</xui-statistic-label>
        <xui-statistic-value>5,550</xui-statistic-value>
      </xui-statistic>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticExample',
};
</script>

<style>
.single-example {
  padding: 20px 0;
}
</style>
