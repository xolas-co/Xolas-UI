<template lang="html">
  <xui-menu text>
    <xui-menu-item header>Sort By</xui-menu-item>
    <a
      is="xui-menu-item"
      v-for="item in items"
      :key="item"
      :content="item"
      :active="isActive(item)"
      @click="select(item)"
    />
  </xui-menu>
</template>

<script>
export default {
  name: 'TextMenuExample',
  data() {
    return {
      items: ['Closest', 'Most Comments', 'Most Popular'],
      active: 'Closest',
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
