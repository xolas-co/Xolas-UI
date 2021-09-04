<template lang="html">
  <div>
    <xui-button @click.native="toggle">Show Modal</xui-button>
    <xui-modal v-model="open">
      <xui-modal-header>Select a Photo</xui-modal-header>
      <xui-modal-content scrolling image>
        <xui-image
          wrapped
          size="medium"
          src="static/images/avatar/large/rachel.png"
        />
        <xui-modal-description>
          <xui-header>Default Profile Image</xui-header>
          <template v-for="n in 10">
            <docs-wireframe :key="n" name="short-paragraph" />
          </template>
        </xui-modal-description>
      </xui-modal-content>
      <xui-modal-actions>
        <xui-button positive @click.native="toggle">
          OK
        </xui-button>
      </xui-modal-actions>
    </xui-modal>
  </div>
</template>

<script>
export default {
  name: 'ScrollingModalExample',
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
