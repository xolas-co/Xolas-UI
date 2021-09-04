<template lang="html">
  <xui-feed>
    <xui-feed-event
      :image="image"
      :date="date"
      :summary="summary"
      :extra-text="extraText"
    />

    <xui-feed-event>
      <xui-feed-label :image="image" />
      <xui-feed-content
        :date="date"
        :summary="summary"
        :extra-text="extraText"
      />
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label :image="image" />
      <xui-feed-content>
        <xui-feed-date :content="date" />
        <xui-feed-summary :content="summary" />
        <xui-feed-extra text :content="extraText" />
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/laura.jpg',
      date: '3 days ago',
      summary: 'Laura Faucet created a post',
      extraText: "Have you seen what's going on in Israel? Can you believe it.",
    };
  },
};
</script>
