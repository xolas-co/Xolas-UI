<template lang="html">
  <div>
    <xui-button @click.native="toggle">Show Modal</xui-button>
    <xui-modal v-model="open">
      <xui-modal-header>Select a Photo</xui-modal-header>
      <xui-modal-content image>
        <xui-image
          wrapped
          size="medium"
          src="static/images/avatar/large/rachel.png"
        />
        <xui-modal-description>
          <xui-header>Default Profile Image</xui-header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
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
  name: 'ModalExample',
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

<style lang="css"></style>
