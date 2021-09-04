<template lang="html">
  <div>
    <xui-segment attached="top">
      <docs-wireframe name="paragraph" />
    </xui-segment>

    <xui-menu attached="bottom" tabular>
      <a
        is="xui-menu-item"
        v-for="item in items"
        :key="item"
        :active="isActive(item)"
        @click="select(item)"
      >
        {{ item }}
      </a>

      <xui-menu-menu position="right">
        <a is="xui-menu-item" :active="isActive('new')" @click="select('new')">
          <xui-icon name="add" />
          New Tab
        </a>
      </xui-menu-menu>
    </xui-menu>
  </div>
</template>

<script>
export default {
  name: 'TabularMenuBottomExample',
  data() {
    return {
      items: ['Active Project', 'Project #2', 'Project #3'],
      active: 'Active Project',
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>
