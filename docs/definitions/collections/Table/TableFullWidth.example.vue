<template lang="html">
  <xui-table compact celled definition>
    <xui-table-header full-width>
      <xui-table-row>
        <xui-table-header-cell />
        <xui-table-header-cell>Name</xui-table-header-cell>
        <xui-table-header-cell>Registration Date</xui-table-header-cell>
        <xui-table-header-cell>E-mail address</xui-table-header-cell>
        <xui-table-header-cell>Premium Plan</xui-table-header-cell>
      </xui-table-row>
    </xui-table-header>
    <xui-table-body>
      <xui-table-row>
        <xui-table-cell collapsing>
          <xui-checkbox toggle />
        </xui-table-cell>
        <xui-table-cell>John Lilki</xui-table-cell>
        <xui-table-cell>September 14, 2013</xui-table-cell>
        <xui-table-cell>jhlilk22@yahoo.com</xui-table-cell>
        <xui-table-cell>No</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell class="collapsing">
          <xui-checkbox toggle />
        </xui-table-cell>
        <xui-table-cell>Jamie Harington</xui-table-cell>
        <xui-table-cell>January 11, 2014</xui-table-cell>
        <xui-table-cell>jamieharingonton@yahoo.com</xui-table-cell>
        <xui-table-cell>Yes</xui-table-cell>
      </xui-table-row>
      <xui-table-row>
        <xui-table-cell collapsing>
          <xui-checkbox toggle />
        </xui-table-cell>
        <xui-table-cell>Jill Lewis</xui-table-cell>
        <xui-table-cell>May 11, 2014</xui-table-cell>
        <xui-table-cell>jilsewris22@yahoo.com</xui-table-cell>
        <xui-table-cell>Yes</xui-table-cell>
      </xui-table-row>
    </xui-table-body>
    <xui-table-footer full-width>
      <xui-table-row>
        <xui-table-header-cell />
        <xui-table-header-cell colspan="4">
          <xui-button floated="right" size="small" primary labeled>
            <xui-icon name="user" /> Add User
          </xui-button>
          <xui-button size="small">
            Approve
          </xui-button>
          <xui-button size="small" disabled>
            Approve All
          </xui-button>
        </xui-table-header-cell>
      </xui-table-row>
    </xui-table-footer>
  </xui-table>
</template>

<script>
export default {
  name: 'TableFullWidthExample',
};
</script>
