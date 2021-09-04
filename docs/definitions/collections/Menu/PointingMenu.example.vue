<template>
  <div>
    <xui-menu pointing>
      <a
        is="xui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <xui-menu-menu position="right">
        <xui-menu-item>
          <xui-input transparent icon="search" placeholder="Search..." />
        </xui-menu-item>
      </xui-menu-menu>
    </xui-menu>

    <xui-segment>
      <docs-wireframe name="paragraph" />
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'PointingMenuExample',
  data() {
    return {
      active: 'Home',
      items: ['Home', 'Messages', 'Friends'],
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
