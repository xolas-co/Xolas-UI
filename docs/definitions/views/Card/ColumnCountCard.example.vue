<template lang="html">
  <div>
    <xui-card-group :items-per-row="4">
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="4" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="2" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="3" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="4" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="3" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="3" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="4" />
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-image src="static/images/wireframes/image.png" />
        <xui-card-content extra>
          Rating: <xui-rating icon="star" :max-rating="4" :rating="4" />
        </xui-card-content>
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ColumnCountCardExample',
};
</script>
