<template lang="html">
  <div>
    <xui-menu fixed inverted>
      <xui-container>
        <a href="#" is="xui-menu-item" class="header">
          <img src="/static/images/logo.png" class="logo" />
          Project Name
        </a>

        <a is="xui-menu-item" href="#">Home</a>

        <xui-dropdown text="Dropdown" item class="simple">
          <xui-dropdown-menu>
            <a is="xui-dropdown-item" href="#">Link Item</a>
            <a is="xui-dropdown-item" href="#">Link Item</a>

            <xui-dropdown-divider />
            <xui-dropdown-header>Header Item</xui-dropdown-header>

            <xui-dropdown-item>
              <xui-icon name="dropdown" /> Submenu

              <xui-dropdown-menu class="simple">
                <a is="xui-dropdown-item" href="#">Link Item</a>
                <a is="xui-dropdown-item" href="#">Link Item</a>
              </xui-dropdown-menu>
            </xui-dropdown-item>

            <a is="xui-dropdown-item" href="#">Link Item</a>
          </xui-dropdown-menu>
        </xui-dropdown>
      </xui-container>
    </xui-menu>

    <xui-container class="main" text>
      <xui-header size="huge">Vue Xolas UI Fixed Template</xui-header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>

      <docs-wireframe name="media-paragraph" />
      <docs-wireframe
        v-for="n in 5"
        :key="n"
        class="wireframe"
        name="paragraph"
      />
    </xui-container>

    <xui-segment inverted vertical class="footer">
      <xui-container text-align="center">
        <xui-grid class="inverted" stackable divided>
          <xui-grid-row>
            <xui-grid-column :width="3" v-for="n in 3" :key="n">
              <xui-list class="inverted" link>
                <h4 is="xui-header" :content="`Group ${n}`" class="inverted" />
                <a is="xui-list-item" href="#">Link One</a>
                <a is="xui-list-item" href="#">Link Two</a>
                <a is="xui-list-item" href="#">Link Three</a>
                <a is="xui-list-item" href="#">Link Four</a>
              </xui-list>
            </xui-grid-column>
            <xui-grid-column :width="3">
              <h4 is="xui-header" content="Footer Header" class="inverted" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </xui-grid-column>
          </xui-grid-row>
        </xui-grid>

        <xui-divider inverted section />

        <xui-image src="/static/images/logo.png" size="mini" centered />
        <xui-list horizontal divided link class="inverted">
          <a is="xui-list-item" href="#">Site Map</a>
          <a is="xui-list-item" href="#">Contact Us</a>
          <a is="xui-list-item" href="#">Terms and Conditions</a>
          <a is="xui-list-item" href="#">Privacy Policy</a>
        </xui-list>
      </xui-container>
    </xui-segment>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
img.logo {
  margin-right: 1.5em !important;
}

.main {
  margin-top: 7em;
}

.wireframe {
  margin: 2em 0;
}

.footer {
  margin: 5em 0em 0em;
  padding: 5em 0em;
}
</style>
