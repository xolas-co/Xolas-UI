<template lang="html">
  <div>
    <xui-button color="red" content="Like" icon="heart">
      <a is="xui-label" slot="label" basic color="red" pointing="left">
        2,048
      </a>
    </xui-button>

    <xui-button basic color="blue" content="Fork" icon="fork">
      <a is="xui-label" slot="label" basic color="blue" pointing="left">
        1,048
      </a>
    </xui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonLabeledBasicExample',
};
</script>
