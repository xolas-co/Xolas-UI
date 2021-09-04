<template lang="html">
  <div>
    <xui-message info>
      Some small sizes may not be able to fit an inlined label
    </xui-message>
    <xui-progress size="tiny" label="Tiny" />
    <xui-progress size="small" label="Small" />
    <xui-progress size="standard" label="Standard" />
    <xui-progress size="large" label="Large" />
    <xui-progress size="big" label="Big" />
  </div>
</template>

<script>
export default {
  name: 'SizeProgressExample',
};
</script>
