<template lang="html">
  <div>
    <div class="ui stackable equal width grid">
      <div class="column">
        <button is="xui-button">Default</button>
        <button is="xui-button" primary>Primary</button>
        <button is="xui-button" secondary>Secondary</button>
        <button is="xui-button" basic>Basic</button>
        <button is="xui-button" compact>
          Compact
        </button>

        <div is="xui-divider" />
        <button is="xui-button" icon="heart" />
        <button
          is="xui-button"
          icon="heart"
          content="Labeled"
          label-position="left"
        />
        <button
          is="xui-button"
          icon="heart"
          content="Labeled"
          label-position="right"
        />

        <div is="xui-divider" />

        <div is="xui-button-group">
          <button is="xui-button">Combo</button>
          <div is="xui-dropdown" button floating icon="dropdown">
            <div is="xui-dropdown-menu">
              <div is="xui-dropdown-item">Choice 1</div>
              <div is="xui-dropdown-item">Choice 2</div>
              <div is="xui-dropdown-item">Choice 3</div>
            </div>
          </div>
        </div>

        <div class="ui floating search dropdown button">
          <input class="search" autocomplete="off" tabindex="0" />
          <span class="text">Search Dropdown</span>
          <div class="menu" tabindex="-1">
            <div class="item">Arabic</div>
            <div class="item">Chinese</div>
            <div class="item">Danish</div>
            <div class="item">Dutch</div>
            <div class="item">English</div>
            <div class="item">French</div>
            <div class="item">German</div>
            <div class="item">Greek</div>
            <div class="item">Hungarian</div>
            <div class="item">Italian</div>
            <div class="item">Japanese</div>
            <div class="item">Korean</div>
            <div class="item">Lithuanian</div>
            <div class="item">Persian</div>
            <div class="item">Polish</div>
            <div class="item">Portuguese</div>
            <div class="item">Russian</div>
            <div class="item">Spanish</div>
            <div class="item">Swedish</div>
            <div class="item">Turkish</div>
            <div class="item">Vietnamese</div>
          </div>
        </div>

        <div is="xui-divider" />

        <!-- <div class="ui animated button" tabindex="0">
          <div class="visible content">Horizontal</div>
          <div class="hidden content">
            Hidden
          </div>
        </div>
        <div class="ui vertical animated button" tabindex="0">
          <div class="visible content">Vertical</div>
          <div class="hidden content">
            Hidden
          </div>
        </div>
        <div class="ui animated fade button" tabindex="0">
          <div class="visible content">Fade In</div>
          <div class="hidden content">
            Hidden
          </div>
        </div> -->

        <div is="xui-divider" />

        <button is="xui-button" disabled>Disabled</button>
        <button is="xui-button" loading>Loading</button>

        <div is="xui-divider" />

        <div class="ui buttons">
          <button is="xui-button">1</button>
          <button is="xui-button">2</button>
          <button is="xui-button">3</button>
        </div>

        <div class="ui icon buttons">
          <button is="xui-button" icon="align left" />
          <button is="xui-button" icon="align center" />
          <button is="xui-button" icon="align right" />
          <button is="xui-button" icon="align justify" />
        </div>

        <div is="xui-button-group">
          <button is="xui-button">1</button>
          <div is="xui-button-or" />
          <button is="xui-button">2</button>
        </div>

        <div is="xui-divider" />

        <div is="xui-button-group" attached="top" :widths="2">
          <div is="xui-button">One</div>
          <div is="xui-button">Two</div>
        </div>
        <div is="xui-segment" attached>
          <img src="static/images/wireframes/paragraph.png" is="xui-image" />
        </div>
        <div is="xui-button-group" attached="bottom" :widths="2">
          <div is="xui-button">One</div>
          <div is="xui-button">Two</div>
        </div>
      </div>
      <div class="column">
        <button is="xui-button" size="mini">Mini</button>
        <button is="xui-button" size="tiny">Tiny</button>
        <button is="xui-button" size="small">Small</button>
        <button is="xui-button" size="large">Large</button>
        <button is="xui-button" size="big">Big</button>
        <button is="xui-button" size="huge">Huge</button>
        <button is="xui-button" size="massive">Massive</button>
        <div is="xui-divider" />
        <div class="spaced">
          <button is="xui-button" color="yellow">Yellow</button>
          <button is="xui-button" color="orange">Orange</button>
          <button is="xui-button" color="green">Green</button>
          <button is="xui-button" color="teal">Teal</button>
          <button is="xui-button" color="blue">Blue</button>
          <button is="xui-button" color="purple">Purple</button>
          <button is="xui-button" color="pink">Pink</button>
          <button is="xui-button" color="red">Red</button>
          <button is="xui-button" color="black">Black</button>
        </div>

        <div is="xui-divider" />

        <div is="xui-segment" inverted>
          <button is="xui-button" inverted>Inverted</button>
          <button is="xui-button" inverted color="basic">Basic</button>
          <button is="xui-button" inverted color="blue">Colored</button>
          <button is="xui-button" inverted color="blue" basic>
            Basic Colored
          </button>
        </div>
      </div>
    </div>

    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.spaced > .button {
  margin-bottom: 1em;
}
</style>
