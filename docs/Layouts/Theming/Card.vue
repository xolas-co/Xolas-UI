<template lang="html">
  <div>
    <div is="xui-card-group" :items-per-row="4">
      <div is="xui-card">
        <xui-image
          src="static/images/wireframes/image.png"
          is="xui-dimmer-dimmable"
          @mouseover.native="isActive[0] = true"
          @mouseleave.native="isActive[0] = false"
        >
          <xui-dimmer blurring inverted :active="isActive[0]">
            <xui-button color="teal">Add Friend</xui-button>
          </xui-dimmer>
        </xui-image>
        <div is="xui-card-content">
          <div is="xui-card-header">Title</div>
          <div is="xui-card-meta">
            <a>Meta</a>
          </div>
          <div is="xui-card-description">
            One or two sentence description that may go to several lines
          </div>
        </div>
        <div is="xui-card-content" extra>
          <a>Arbitrary</a>
          <a slot="right">Arbitrary</a>
        </div>
      </div>

      <div is="xui-card">
        <xui-image
          src="static/images/wireframes/image.png"
          is="xui-dimmer-dimmable"
          @mouseover.native="isActive[0] = true"
          @mouseleave.native="isActive[0] = false"
        >
          <xui-dimmer>
            <xui-button inverted>Call to Action</xui-button>
          </xui-dimmer>
        </xui-image>
        <div is="xui-card-content">
          <a is="xui-card-header">Name</a>
          <div is="xui-card-meta">Date</div>
        </div>
        <div is="xui-card-content" extra>
          <a><xui-icon name="users" /> Users</a>
        </div>
      </div>

      <div is="xui-card">
        <div class="ui slide right reveal image">
          <div class="visible content">
            <img class="ui fluid image" src="static/images/avatar/nan.jpg" />
          </div>
          <div class="hidden content">
            <img class="ui fluid image" src="static/images/avatar/tom.jpg" />
          </div>
        </div>
        <div is="xui-card-content">
          <img
            src="static/images/wireframes/paragraph.png"
            class="ui wireframe image"
          />
        </div>
      </div>
      <div is="xui-card">
        <div class="ui move reveal image">
          <div class="visible content">
            <img class="ui fluid image" src="static/images/avatar/tom.jpg" />
          </div>
          <div class="hidden content">
            <img class="ui fluid image" src="static/images/avatar/nan.jpg" />
          </div>
        </div>
        <div is="xui-card-content">
          <img
            src="static/images/wireframes/paragraph.png"
            class="ui wireframe image"
          />
        </div>
      </div>
    </div>

    <div is="xui-card-group" :items-per-row="4">
      <div is="xui-card">
        <div is="xui-card-content" extra>
          <xui-icon name="like" /> Like
          <span slot="right"> <xui-icon name="star" /> Favorite </span>
        </div>
        <div is="xui-card-content">
          <xui-image src="static/images/wireframes/paragraph.png" />
        </div>
      </div>
      <div is="xui-card">
        <div is="xui-card-content">
          <div class="header">
            <img
              src="static/images/wireframes/square-image.png"
              class="ui avatar right spaced image"
            />
            Abbreviated Header
          </div>
          <div class="description">
            <xui-image src="static/images/wireframes/paragraph.png" />
          </div>
        </div>
        <div is="xui-button-group" attached="bottom" :widths="2">
          <div is="xui-button">
            Action 1
          </div>
          <div is="xui-button">
            Action 2
          </div>
        </div>
      </div>
      <a href="#" class="ui card">
        <div is="xui-card-content">
          <div class="header">Cute Dog</div>
          <div class="meta">
            <span class="category">Animals</span>
          </div>
          <div class="description">
            <img
              src="static/images/wireframes/paragraph.png"
              class="ui wireframe image"
            />
          </div>
        </div>
        <div is="xui-card-content" extra>
          <div class="right floated author">
            <img
              src="static/images/wireframes/square-image.png"
              class="ui avatar image"
            />
            Username
          </div>
        </div>
      </a>
      <div is="xui-card">
        <div class="ui two top attached basic buttons">
          <div class="ui button">
            Action 1
          </div>
          <div class="ui button">
            Action 2
          </div>
        </div>
        <div is="xui-card-content">
          <img
            src="static/images/wireframes/paragraph.png"
            class="ui wireframe image"
          />
        </div>
        <div class="ui two bottom attached basic buttons">
          <div class="ui button">
            Action 3
          </div>
          <div class="ui button">
            Action 4
          </div>
        </div>
      </div>
    </div>

    <div is="xui-card-group" :items-per-row="4">
      <div is="xui-card">
        <div is="xui-card-content">
          Content 1
        </div>
        <div is="xui-card-content">
          Content 2
        </div>
        <div is="xui-card-content">
          Content 3
        </div>
        <div is="xui-card-content" extra>
          Extra Content
        </div>
      </div>
      <div is="xui-card">
        <div is="xui-card-content">
          Content 1
        </div>
        <div is="xui-card-content">
          Content 2
        </div>
        <div is="xui-card-content">
          Content 3
        </div>
        <div is="xui-card-content" extra>
          Extra Content
        </div>
      </div>
      <div is="xui-card">
        <div is="xui-card-content">
          Content 1
        </div>
        <div is="xui-card-content">
          Content 2
        </div>
        <div is="xui-card-content">
          Content 3
        </div>
        <div is="xui-card-content" extra>
          Extra Content
        </div>
      </div>
      <div is="xui-card">
        <div is="xui-card-content">
          Content 1
        </div>
        <div is="xui-card-content">
          Content 2
        </div>
        <div is="xui-card-content">
          Content 3
        </div>
        <div is="xui-card-content" extra>
          Extra Content
        </div>
      </div>
    </div>

    <div is="xui-card-group" :items-per-row="4">
      <div class="card">
        <div class="image">
          <img src="static/images/wireframes/image.png" />
        </div>
        <div class="extra center aligned">
          <div data-rating="4" class="ui star rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="static/images/wireframes/image.png" />
        </div>
        <div class="extra center aligned">
          <div data-rating="2" class="ui star rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
            <i class="icon"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="static/images/wireframes/image.png" />
        </div>
        <div class="extra center aligned">
          <div data-rating="3" class="ui star rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="static/images/wireframes/image.png" />
        </div>
        <div class="extra center aligned">
          <div data-rating="4" class="ui star rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
          </div>
        </div>
      </div>
    </div>

    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: [] };
  },
};
</script>

<style lang="css"></style>
