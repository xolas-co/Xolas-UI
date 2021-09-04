<template lang="html">
  <xui-table basic="very" celled collapsing>
    <xui-table-header>
      <xui-table-row>
        <xui-table-header-cell>Employee</xui-table-header-cell>
        <xui-table-header-cell>Correct Guesses</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>

    <xui-table-body>
      <xui-table-row>
        <xui-table-cell>
          <h4 is="xui-header" image>
            <xui-image
              src="static/images/avatar/small/lena.png"
              shape="rounded"
              size="mini"
            />
            <xui-header-content>
              Lena
              <xui-header-subheader>Human Resources</xui-header-subheader>
            </xui-header-content>
          </h4>
        </xui-table-cell>
        <xui-table-cell>
          22
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <h4 is="xui-header" image>
            <xui-image
              src="static/images/avatar/small/matthew.png"
              shape="rounded"
              size="mini"
            />
            <xui-header-content>
              Matthew
              <xui-header-subheader>Fabric Design</xui-header-subheader>
            </xui-header-content>
          </h4>
        </xui-table-cell>
        <xui-table-cell>
          15
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <h4 is="xui-header" image>
            <xui-image
              src="static/images/avatar/small/lindsay.png"
              shape="rounded"
              size="mini"
            />
            <xui-header-content>
              Lindsay
              <xui-header-subheader>Entertainment</xui-header-subheader>
            </xui-header-content>
          </h4>
        </xui-table-cell>
        <xui-table-cell>
          12
        </xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell>
          <h4 is="xui-header" image>
            <xui-image
              src="static/images/avatar/small/mark.png"
              shape="rounded"
              size="mini"
            />
            <xui-header-content>
              Mark
              <xui-header-subheader>Executive</xui-header-subheader>
            </xui-header-content>
          </h4>
        </xui-table-cell>
        <xui-table-cell>
          11
        </xui-table-cell>
      </xui-table-row>
    </xui-table-body>
  </xui-table>
</template>

<script>
export default {
  name: 'TableAvatarExample',
};
</script>
