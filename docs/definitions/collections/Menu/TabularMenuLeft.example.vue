<template lang="html">
  <xui-grid>
    <xui-grid-column :width="4">
      <xui-menu fluid vertical tabular>
        <a
          v-for="item in items"
          :key="item"
          is="xui-menu-item"
          :content="item"
          :active="isActive(item)"
          @click="select(item)"
        />
      </xui-menu>
    </xui-grid-column>

    <xui-grid-column stretched :width="12">
      <xui-segment>
        This is an stretched grid column. This segment will always match the tab
        height
      </xui-segment>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {
  name: 'TabularMenuExample',
  data() {
    return {
      items: ['Bio', 'Pics', 'Companies', 'Links'],
      active: 'Bio',
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
