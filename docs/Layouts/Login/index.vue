<template lang="html">
  <div class="background">
    <xui-grid centered vertical-align="middle">
      <xui-grid-column>
        <h2 is="xui-header" color="teal" image>
          <xui-image src="static/images/logo.png" />
          <xui-header-content>Log-in to your account</xui-header-content>
        </h2>

        <xui-form>
          <xui-segment stacked>
            <xui-form-field>
              <xui-input
                type="email"
                placeholder="E-mail address"
                icon="user"
                icon-position="left"
              />
            </xui-form-field>
            <xui-form-field>
              <xui-input
                type="password"
                placeholder="Password"
                icon="lock"
                icon-position="left"
              />
            </xui-form-field>
            <xui-button size="large" color="teal" fluid>Login</xui-button>
          </xui-segment>
        </xui-form>

        <xui-message>New to us? <a href="#">Sign Up</a></xui-message>
      </xui-grid-column>
    </xui-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.background {
  background-color: #dadada !important;
  height: 100vh;
  margin: 1em 0;
}

.grid {
  height: 100%;
}

.column {
  max-width: 450px;
  text-align: center !important;
}
</style>
