<template lang="html">
  <div>
    <xui-message info>
      Page headings are sized using
      <a href="https://j.eremy.net/confused-about-rem-and-em/"
        ><code>rem</code></a
      >
      and are not affected by surrounding content size.
    </xui-message>

    <h1 is="xui-header">First header</h1>
    <docs-wireframe name="short-paragraph" />

    <h2 is="xui-header">Second header</h2>
    <docs-wireframe name="short-paragraph" />

    <h3 is="xui-header">Third header</h3>
    <docs-wireframe name="short-paragraph" />

    <h4 is="xui-header">Fourth header</h4>
    <docs-wireframe name="short-paragraph" />

    <h5 is="xui-header">Fifth header</h5>
    <docs-wireframe name="short-paragraph" />
  </div>
</template>

<script>
export default {
  name: 'PageHeaders',
};
</script>
