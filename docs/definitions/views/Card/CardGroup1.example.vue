<template lang="html">
  <div>
    <xui-card-group :items-per-row="3">
      <xui-card>
        <xui-card-content>
          <xui-image
            src="static/images/avatar/small/elliot.jpg"
            class="right floated"
          />
          <xui-card-header>Elliot Fu</xui-card-header>
          <xui-card-meta>Friends of Veronika</xui-card-meta>
          <xui-card-description>
            Elliot requested permission to view your contact details
          </xui-card-description>
        </xui-card-content>
        <xui-card-content extra>
          <xui-container text-align="center">
            <xui-button-group>
              <xui-button basic positive>Approve</xui-button>
              <xui-button basic negative>Decline</xui-button>
            </xui-button-group>
          </xui-container>
        </xui-card-content>
      </xui-card>
      <xui-card>
        <xui-card-content>
          <xui-image
            src="static/images/avatar/small/jenny.jpg"
            class="right floated"
          />
          <xui-card-header>Jenny Hess</xui-card-header>
          <xui-card-meta>New Member</xui-card-meta>
          <xui-card-description>
            Jenny wants to add you to the group <b>best friends</b>
          </xui-card-description>
        </xui-card-content>
        <xui-card-content extra>
          <xui-container text-align="center">
            <xui-button-group>
              <xui-button basic positive>Approve</xui-button>
              <xui-button basic negative>Decline</xui-button>
            </xui-button-group>
          </xui-container>
        </xui-card-content>
      </xui-card>
    </xui-card-group>
  </div>
</template>

<script>
export default {
  name: 'CardGroup1Example',
};
</script>
