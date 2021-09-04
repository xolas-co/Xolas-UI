<template lang="html">
  <div>
    <xui-card>
      <xui-card-content>
        <xui-card-header>
          Project Timeline
        </xui-card-header>
      </xui-card-content>
      <xui-card-content>
        <xui-header size="tiny">ACTIVITY</xui-header>
        <!--
          xui-feed is not available yet, therefore base semantic ui has been substituted for now
        -->
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary"><a>Helen Troy</a> added two pictures</div>
            </div>
          </div>
        </div>
        <!-- end of base semantic ui, to be updated in the future with xui-feed -->
      </xui-card-content>
      <xui-card-content extra>
        <xui-button>Join Project</xui-button>
      </xui-card-content>
    </xui-card>
  </div>
</template>

<script>
export default {
  name: 'ContentBlockExample',
};
</script>
