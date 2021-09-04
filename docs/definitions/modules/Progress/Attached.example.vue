<template lang="html">
  <div>
    <xui-segment>
      <xui-progress attached top :percent="percent" :label="label" />
      <xui-progress
        attached
        bottom
        color="green"
        :percent="percent"
        :label="label"
      />
    </xui-segment>
    <xui-button @click.native="decrease">-</xui-button>
    <xui-button @click.native="increase">+</xui-button>
  </div>
</template>

<script>
export default {
  name: 'AttachedProgressExample',
  data() {
    return { percent: 43 };
  },
  computed: {
    label() {
      return `${this.percent}% Funded`;
    },
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
