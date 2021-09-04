<template>
  <xui-grid :columns="3" style="width: 600px">
    <xui-grid-row>
      <xui-grid-column>
        <xui-popup
          content="I am positioned to the top left"
          position="top left"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
      <xui-grid-column text-align="center">
        <xui-popup
          content="I am positioned to the top center"
          position="top center"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
      <xui-grid-column text-align="right">
        <xui-popup
          content="I am positioned to the top right"
          position="top right"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
    </xui-grid-row>
    <xui-grid-row>
      <xui-grid-column floated="left">
        <xui-popup
          content="I am positioned to the left center"
          position="left center"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
      <xui-grid-column floated="right" text-align="right">
        <xui-popup
          content="I am positioned to the right center"
          position="right center"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
    </xui-grid-row>
    <xui-grid-row>
      <xui-grid-column>
        <xui-popup
          content="I am positioned to the bottom left"
          position="bottom left"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
      <xui-grid-column text-align="center">
        <xui-popup
          content="I am positioned to the bottom center"
          position="bottom center"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
      <xui-grid-column text-align="right">
        <xui-popup
          content="I am positioned to the bottom right"
          position="bottom right"
        >
          <xui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </xui-popup>
      </xui-grid-column>
    </xui-grid-row>
  </xui-grid>
</template>

<script>
export default {};
</script>
