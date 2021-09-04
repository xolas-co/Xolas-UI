<template lang="html">
  <xui-table celled padded>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell single-line
          >Evidence Rating</xui-table-header-cell
        >
        <xui-table-header-cell>Effect</xui-table-header-cell>
        <xui-table-header-cell>Efficacy</xui-table-header-cell>
        <xui-table-header-cell>Consensus</xui-table-header-cell>
        <xui-table-header-cell>Comments</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>

    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>
          <h2 is="xui-header" text-align="center">A</h2>
        </xui-table-cell>
        <xui-table-cell single-line>Power Output</xui-table-cell>
        <xui-table-cell>
          <xui-rating icon="star" :rating="3" :max-rating="3" />
        </xui-table-cell>
        <xui-table-cell text-align="right">
          80% <br />
          <a href="#">18 studies</a>
        </xui-table-cell>
        <xui-table-cell>
          Creatine supplementation is the reference compound for increasing
          muscular creatine levels; there is variability in this increase,
          however, with some nonresponders.
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <h2 is="xui-header" text-align="center">A</h2>
        </xui-table-cell>
        <xui-table-cell single-line>Weight</xui-table-cell>
        <xui-table-cell>
          <xui-rating icon="star" :rating="3" :max-rating="3" />
        </xui-table-cell>
        <xui-table-cell text-align="right">
          100% <br />
          <a href="#">65 studies</a>
        </xui-table-cell>
        <xui-table-cell>
          Creatine is the reference compound for power improvement, with numbers
          from one meta-analysis to assess potency
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableRatingExample',
};
</script>
