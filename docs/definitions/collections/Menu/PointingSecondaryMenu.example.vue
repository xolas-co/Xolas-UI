<template>
  <div>
    <xui-menu pointing secondary>
      <a
        is="xui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <xui-menu-menu position="right">
        <a
          is="xui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click="select('Logout')"
        />
      </xui-menu-menu>
    </xui-menu>

    <xui-segment>
      <docs-wireframe name="media-paragraph" />
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'PointingMenuSecondaryExample',
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
