<template>
  <xui-segment class="masthead">
    <xui-container>
      <xui-menu floated="right">
        <xui-popup position="bottom center" content="View on GitHub">
          <a
            slot="trigger"
            is="xui-menu-item"
            icon="github"
            :href="githubLink"
          />
        </xui-popup>
        <xui-popup position="bottom center" content="View on Semantic UI">
          <a slot="trigger" is="xui-menu-item" icon="book" :href="xuiLink" />
        </xui-popup>
      </xui-menu>
      <h1 is="xui-header">
        {{ title }}
        <xui-header-subheader sub>{{
          currentComponent.description
        }}</xui-header-subheader>
      </h1>

      <xui-menu :widths="2" class="component-head-menu">
        <router-link
          is="xui-menu-item"
          :active="!tab"
          :to="`/${type}/${componentName}`"
        >
          Definitions
        </router-link>
        <router-link
          is="xui-menu-item"
          :active="tab === 'api'"
          :to="`/${type}/${componentName}/api`"
        >
          API
        </router-link>
      </xui-menu>
    </xui-container>
  </xui-segment>
</template>

<script>
import capitalize from 'lodash/capitalize';
import * as components from 'vue-xolas-ui';

const getComponentFromName = name => components[capitalize(name)];

export default {
  name: 'XuiComponent',
  props: {
    type: String,
    componentName: String,
    tab: String,
  },
  data() {
    return {
      currentComponent: getComponentFromName(this.componentName),
    };
  },
  computed: {
    title() {
      return capitalize(this.componentName);
    },
    xuiLink() {
      return `https://semantic-ui.com/${this.type}/${this.componentName}.html`;
    },
    githubLink() {
      return `https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/tree/master/src/${this.type}/${this.title}/${this.title}.jsx`;
    },
  },
};
</script>

<style scoped>
.masthead {
  padding: 3em 0 4em;
  margin-bottom: 0 !important;
}

.masthead > .ui.container {
  max-width: 960px !important;
  margin-right: 3em !important;
  margin-left: 3em !important;
  width: auto !important;
}

.component-head-menu {
  margin: 3rem 0rem 0rem !important;
}
</style>
