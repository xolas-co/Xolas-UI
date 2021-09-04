<template lang="html">
  <xui-feed>
    <xui-feed-event
      icon="pencil"
      date="Today"
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <xui-feed-event>
      <xui-feed-label icon="pencil" />
      <xui-feed-content
        date="Today"
        summary="You posted on your friend Stevie Feliciano's wall."
      />
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'IconLabelShorthandExample',
};
</script>
