<template>
  <div>
    <xui-message warning>
      Popup relies on Vue Portal to be installed and globally added to you
      application. For Popup to correctly work, install
      <a href="https://linusborg.github.io/portal-vue" target="_blank"
        >Portal Vue</a
      >

      and write:

      <pre>
// index.js
import Vue from 'vue';
import PortalVue from 'portal-vue';
// ...
Vue.use(PortalVue);
      </pre>

      Also, make sure to add
      <code>&lt;portal-target name="vue-xolas-ui"></code> at the root level of
      your app.
    </xui-message>
    <xui-popup content="Add users to your feed">
      <xui-button icon="add" slot="trigger" />
    </xui-popup>
  </div>
</template>

<script>
export default {};
</script>
