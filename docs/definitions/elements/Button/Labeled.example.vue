<template lang="html">
  <div>
    <xui-button content="Like" icon="heart">
      <a is="xui-label" slot="label" basic>2,048</a>
    </xui-button>

    <xui-button content="Like" icon="heart" label-position="left">
      <a is="xui-label" slot="label" basic pointing="right">
        2,048
      </a>
    </xui-button>

    <xui-button icon="fork" label-position="left">
      <a is="xui-label" slot="label" basic>1,048</a>
    </xui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonLabeledExample',
};
</script>
