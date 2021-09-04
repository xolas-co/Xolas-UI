<template lang="html">
  <div>
    <xui-embed
      :active="active"
      icon="arrow circle down"
      id="90Omh7_I8vI"
      placeholder="static/images/extras/image-16by9.png"
      source="youtube"
    />

    <xui-divider hidden />

    <xui-button
      content="Activate"
      icon="bomb"
      label-position="left"
      @click.native="handleClick"
    />
  </div>
</template>

<script>
export default {
  name: 'ActiveExample',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleClick() {
      this.active = true;
    },
  },
};
</script>
