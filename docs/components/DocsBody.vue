<template>
  <div class="component-body">
    <xui-rail dividing position="right" id="docs-rail">
      <h4 is="xui-header">
        {{ title }}
      </h4>

      <xui-accordion vertical fluid text is="xui-menu">
        <xui-menu-item v-for="(element, i) in elements" :key="i">
          <xui-accordion-title is="xui-menu-header" active>
            {{ element.name }}
            <xui-icon name="dropdown" />
          </xui-accordion-title>
          <xui-accordion-content is="xui-menu" text class="sub-menu">
            <template v-for="(subElement, j) in element[subElementsKey]">
              <router-link
                v-if="subElement.name"
                is="xui-menu-item"
                :to="`#${getId(element, subElement)}`"
                :key="j"
              >
                {{ subElement.name }}
              </router-link>
            </template>
          </xui-accordion-content>
        </xui-menu-item>
      </xui-accordion>
    </xui-rail>
    <template v-for="element in elements">
      <div :key="element.name">
        <h2 is="xui-header" dividing>{{ element.name }}</h2>
        <template v-for="subElement in element[subElementsKey]">
          <slot
            v-bind:id="getId(element, subElement)"
            v-bind:element="subElement"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    elements: Array,
    subElementsKey: String,
    title: String,
  },
  methods: {
    getId(element, subElement) {
      return `${element.name}-${subElement.name}`;
    },
  },
};
</script>

<style scoped>
.component-body {
  position: relative;
  margin-left: 3em !important;
  margin-right: 387px !important;
  max-width: 960px !important;
  padding: 2em 0em 7em;
  width: auto;
}

.ui.dividing.header {
  margin-bottom: 3rem;
}

.example {
  margin: 2em 0em;
  padding: 2em 0em;
  position: relative;
}

.component-body .example:first-child,
.component-body .ui.header + .example {
  margin-top: 0;
}

#docs-rail {
  margin-left: 3em;
  padding-top: 2em;
  width: 319px;
}

.sub-menu {
  min-height: 0 !important;
}
</style>
