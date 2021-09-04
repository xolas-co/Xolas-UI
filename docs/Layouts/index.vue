<template lang="html">
  <div>
    <div is="xui-segment" basic padded>
      <h1 is="xui-header">
        Layouts
        <p is="xui-header-subheader">Examples of using Vue Xolas UI</p>
      </h1>
    </div>

    <div is="xui-segment" basic padded>
      <h2 is="xui-header">
        Starter
        <p is="xui-header-subheader">
          Examples to introduce components and their function
        </p>
      </h2>

      <div is="xui-card-group" :widths="3" stackable>
        <router-link to="/layouts/theming" is="xui-card">
          <xui-image src="static/images/layouts/theming.png" />
          <xui-card-content>
            <xui-card-header>Theming</xui-card-header>
            <xui-card-description>
              Examples of many common UI components, useful for testing custom
              themes.
            </xui-card-description>
          </xui-card-content>
        </router-link>
      </div>
    </div>

    <div is="xui-segment" basic padded>
      <h2 is="xui-header">
        Pages
        <p is="xui-header-subheader">Starter page templates</p>
      </h2>

      <div is="xui-card-group" :widths="3" stackable>
        <router-link to="/layouts/login" is="xui-card">
          <xui-image src="static/images/layouts/login.png" />
          <xui-card-content>
            <xui-card-header>Login Form</xui-card-header>
            <xui-card-description>
              A full-screen login form
            </xui-card-description>
          </xui-card-content>
        </router-link>
      </div>

      <div is="xui-card-group" :widths="3" stackable>
        <router-link to="/layouts/fixed_menu" is="xui-card">
          <xui-image src="static/images/layouts/fixed_menu.png" />
          <xui-card-content>
            <xui-card-header>Fixed Menu</xui-card-header>
            <xui-card-description>
              An example layout with a fixed menu at the top
            </xui-card-description>
          </xui-card-content>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
