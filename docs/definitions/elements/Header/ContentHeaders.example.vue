<template lang="html">
  <xui-segment vertical>
    <xui-message info>
      Content headings are sized using
      <a href="https://j.eremy.net/confused-about-rem-and-em/"
        ><code>em</code></a
      >
      and are based on the font-size of their container.
    </xui-message>

    <xui-button-group>
      <xui-button icon="plus" @click.native="fontSize += 1" />
      <xui-button icon="minus" @click.native="fontSize -= 1" />
    </xui-button-group>

    <div :style="style">
      <xui-header size="huge">Huge header</xui-header>
      <docs-wireframe name="short-paragraph" />

      <xui-header size="large">Large header</xui-header>
      <docs-wireframe name="short-paragraph" />

      <xui-header size="medium">Medium header</xui-header>
      <docs-wireframe name="short-paragraph" />

      <xui-header size="small">Small header</xui-header>
      <docs-wireframe name="short-paragraph" />

      <xui-header size="tiny">Tiny header</xui-header>
      <docs-wireframe name="short-paragraph" />
    </div>
  </xui-segment>
</template>

<script>
export default {
  name: 'ContentHeaders',
  data() {
    return {
      fontSize: 14,
    };
  },
  computed: {
    style() {
      return { fontSize: `${this.fontSize}px` };
    },
  },
};
</script>
