<template lang="html">
  <xui-menu tabular>
    <a
      is="xui-menu-item"
      v-for="item in items"
      :key="item"
      :active="isActive(item)"
      :content="item"
      @click="select(item)"
    />
  </xui-menu>
</template>

<script>
export default {
  name: 'TabularMenuExample',
  data() {
    return {
      items: ['Bio', 'Photos'],
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
