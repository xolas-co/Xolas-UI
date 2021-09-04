<template>
  <div id="docs">
    <div class="docs-desktop" is="xui-sidebar-pushable">
      <docs-menu class="docs-sidebar" visible />
      <div class="docs-container">
        <router-view />
      </div>
    </div>

    <div class="docs-mobile docs-top-bar" is="xui-menu" fixed inverted>
      <xui-container>
        <a
          is="xui-menu-item"
          href="javascript:void 0"
          icon="content"
          @click.native="open = !open"
        />
        <xui-menu-item>Vue Xolas UI</xui-menu-item>
      </xui-container>
    </div>
    <docs-menu class="docs-mobile" :visible="open" />
    <div class="docs-mobile" is="xui-sidebar-pushable">
      <div
        is="xui-sidebar-pusher"
        class="docs-mobile-container"
        :dimmed="open"
        @click.native="open = false"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import DocsMenu from './Menu';

export default {
  name: 'Docs',
  components: { DocsMenu },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.docs-container {
  margin-left: 250px;
  min-width: 550px;
  height: 100vh;
  overflow-y: scroll;
}

.docs-sidebar {
  position: fixed !important;
  top: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  width: 250px !important;
  padding-bottom: 1em !important;
  background: rgb(27, 28, 29) !important;
  overflow-y: scroll !important;
}

.docs-mobile {
  display: none !important;
}

.docs-mobile-container {
  padding-top: 40px;
  padding-bottom: 20px;
}

@media screen and (max-width: 767px) {
  .docs-desktop {
    display: none !important;
  }

  .docs-mobile {
    display: block !important;
  }
}
</style>
