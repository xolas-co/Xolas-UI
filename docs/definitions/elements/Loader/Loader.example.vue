<template lang="html">
  <div>
    <xui-message info>
      Loaders are hidden unless has prop<code>active</code> or inside an
      <code>Dimmer active</code>.
    </xui-message>

    <xui-segment>
      <xui-dimmer active>
        <xui-loader />
      </xui-dimmer>

      <docs-wireframe name="short-paragraph" />
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'LoaderExample',
};
</script>
