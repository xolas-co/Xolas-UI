<template>
  <xui-grid :columns="3">
    <xui-grid-row>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="top">HTML</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="bottom">CSS</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="top right">Code</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
    </xui-grid-row>

    <xui-grid-row>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="top left">View</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="bottom left">User View</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
      <xui-grid-column>
        <xui-segment padded>
          <xui-label attached="bottom right">Admin View</xui-label>
          <docs-wireframe name="paragraph" />
        </xui-segment>
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {};
</script>
