<template lang="html">
  <xui-feed>
    <xui-feed-event :image="image" :date="date" :summary="summary" />
    <xui-feed-event>
      <xui-feed-label :image="image" />
      <xui-feed-content :date="date" :summary="summary" />
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'ContentDateShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/jenny.jpg',
      date: '3 days ago',
      summary: 'You added Jenny Hess to your coworker group.',
    };
  },
};
</script>
