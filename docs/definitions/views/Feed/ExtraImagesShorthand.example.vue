<template lang="html">
  <xui-feed>
    <xui-feed-event
      :image="image"
      :date="date"
      :summary="summary"
      :extra-images="extraImages"
    />

    <xui-feed-event>
      <xui-feed-label :image="image" />
      <xui-feed-content
        :date="date"
        :summary="summary"
        :extra-images="extraImages"
      />
    </xui-feed-event>

    <xui-feed-event>
      <xui-feed-label :image="image" />
      <xui-feed-content>
        <xui-feed-date :content="date" />
        <xui-feed-summary :content="summary" />
        <xui-feed-extra :images="extraImages" />
      </xui-feed-content>
    </xui-feed-event>
  </xui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/helen.jpg',
      date: '3 days ago',
      summary: 'Helen Troy added 2 photos',
      extraImages: [
        'static/images/wireframes/image.png',
        'static/images/wireframes/image-text.png',
      ],
    };
  },
};
</script>
