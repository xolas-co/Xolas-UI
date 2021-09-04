<template>
  <div>
    <xui-popup flowing hoverable>
      <xui-grid centered divided :columns="3">
        <xui-grid-column text-align="center">
          <h4 is="xui-header">Basic Plan</h4>
          <p><b>2</b> projects, $10 a month</p>
          <xui-button>Choose</xui-button>
        </xui-grid-column>
        <xui-grid-column text-align="center">
          <h4 is="xui-header">Business Plan</h4>
          <p><b>5</b> projects, $20 a month</p>
          <xui-button>Choose</xui-button>
        </xui-grid-column>
        <xui-grid-column text-align="center">
          <h4 is="xui-header">Premium Plan</h4>
          <p><b>8</b> projects, $25 a month</p>
          <xui-button>Choose</xui-button>
        </xui-grid-column>
      </xui-grid>
      <xui-button slot="trigger">Show flowing popup</xui-button>
    </xui-popup>
  </div>
</template>

<script>
export default {};
</script>
