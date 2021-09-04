<template>
  <xui-menu
    is="xui-sidebar"
    id="docs-menu"
    inverted="true"
    vertical="true"
    animation="overlay"
    :visible="visible"
  >
    <xui-menu-item>
      <xui-image :src="`/static/images/logo.png`" spaced="right" size="mini" />
      <strong>
        Vue Xolas UI
        <small>
          <em>{{ version }}</em>
        </small>
      </strong>
    </xui-menu-item>
    <xui-menu-item>
      <xui-menu-header>Getting Started</xui-menu-header>
      <xui-menu-menu>
        <router-link is="xui-menu-item" to="/">Quick Start</router-link>
        <router-link is="xui-menu-item" to="/layouts">
          Layouts
        </router-link>
        <router-link is="xui-menu-item" to="/contributing">
          Contributing
        </router-link>
        <router-link is="xui-menu-item" to="/features">
          Feature Status
        </router-link>
        <a
          is="xui-menu-item"
          href="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue"
        >
          Github
          <xui-icon name="github" />
        </a>
        <a is="xui-menu-item" href="https://semantic-ui.com/">
          Semantic UI
          <i class="icon semantic-ui">
            <img src="https://semantic-ui.com/favicon.ico" />
          </i>
        </a>
      </xui-menu-menu>
    </xui-menu-item>
    <xui-menu-item>
      <xui-input
        icon="search"
        inverted
        placeholder="Start typing..."
        transparent
        v-model="search"
        @keypress.native="openFirst"
      />
    </xui-menu-item>
    <xui-menu-menu v-if="search">
      <router-link
        is="xui-menu-item"
        :key="entry.component"
        :active="!index"
        :to="entry.href"
        v-for="(entry, index) in matchingComponents"
      >
        {{ entry.content }}
        <span class="press-enter" v-if="!index">Press Enter</span>
      </router-link>
    </xui-menu-menu>
    <template v-if="!search">
      <xui-menu-item :key="mod.name" v-for="mod in modules">
        <xui-menu-header>{{ mod.name }}</xui-menu-header>
        <xui-menu-menu>
          <router-link
            is="xui-menu-item"
            active-class="active"
            :key="comp"
            :to="getUrl(mod.name, comp)"
            v-for="comp in mod.components"
          >
            {{ comp }}
          </router-link>
        </xui-menu-menu>
      </xui-menu-item>
    </template>
  </xui-menu>
</template>

<script>
import 'semantic-ui-css/semantic.css';
import * as collections from 'vue-xolas-ui/collections';
import * as elements from 'vue-xolas-ui/elements';
import * as modules from 'vue-xolas-ui/modules';
import * as views from 'vue-xolas-ui/views';

export default {
  props: {
    visible: Boolean,
  },
  data() {
    const shouldShow = ([, component]) =>
      !(component.meta && component.meta.parent);

    return {
      modules: [
        {
          name: 'Elements',
          components: Object.entries(elements)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Collections',
          components: Object.entries(collections)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Views',
          components: Object.entries(views)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Modules',
          components: Object.entries(modules)
            .filter(shouldShow)
            .map(([k]) => k),
        },
      ],
      search: '',
      version: process.version,
    };
  },
  computed: {
    matchingComponents() {
      return this.modules
        .map(({ name, components }) =>
          components
            .filter(compName => new RegExp(this.search, 'i').test(compName))
            .map(component => ({
              content: component,
              href: this.getUrl(name, component),
            })),
        )
        .reduce((acc, arr) => acc.concat(arr), [])
        .sort((a, b) => a.component > b.component);
    },
  },
  methods: {
    getUrl(mod, comp) {
      return `/${mod}/${comp}`.toLowerCase();
    },
    openFirst(e) {
      if (e.keyCode === 13 && this.search && this.matchingComponents.length) {
        this.$router.push(this.matchingComponents[0].href);
      }
    },
  },
};
</script>

<style scoped>
.press-enter {
  color: rgb(53, 189, 178);
  float: right;
}

.semantic-ui.icon img {
  height: 12px;
}

#docs-menu:hover::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25);
}

#docs-menu::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0);
}

#docs-menu::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0);
}
</style>
