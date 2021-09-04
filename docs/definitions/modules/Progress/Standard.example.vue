<template lang="html">
  <div>
    <xui-progress :percent="percent" label="Uploading Files" />
    <xui-button @click.native="decrease">-</xui-button>
    <xui-button @click.native="increase">+</xui-button>
  </div>
</template>

<script>
export default {
  name: 'StandardProgressExample',
  data() {
    return { percent: 10 };
  },
  methods: {
    decrease() {
      this.percent -= 17;
      if (this.percent <= 0) {
        this.percent = 0;
      }
    },
    increase() {
      this.percent += 13;
      if (this.percent >= 100) {
        this.percent = 100;
      }
    },
  },
};
</script>
