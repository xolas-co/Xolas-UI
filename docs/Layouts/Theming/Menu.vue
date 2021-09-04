<template lang="html">
  <div>
    <div is="xui-menu">
      <div is="xui-menu-item" header>Brand</div>
      <a is="xui-menu-item" active>Link</a>
      <a is="xui-menu-item">Link</a>
      <xui-dropdown is="xui-menu-item" text="Dropdown">
        <div is="xui-dropdown-menu" tabindex="-1">
          <div is="xui-dropdown-item">Action</div>
          <div is="xui-dropdown-item">Another Action</div>
          <div is="xui-dropdown-item">Something else here</div>
          <div is="xui-dropdown-divider" />
          <div is="xui-dropdown-item">Separated Link</div>
          <div is="xui-dropdown-divider" />
          <div is="xui-dropdown-item">One more separated link</div>
        </div>
      </xui-dropdown>
      <div is="xui-menu-menu" position="right">
        <div is="xui-menu-item">
          <div
            type="text"
            placeholder="Submit"
            is="xui-input"
            action="Submit"
            icon="search"
            icon-position="left"
          />
        </div>
        <a is="xui-menu-item">Link</a>
      </div>
    </div>

    <div is="xui-menu" inverted>
      <div is="xui-menu-item" header>Brand</div>
      <a is="xui-menu-item" active>Link</a>
      <a is="xui-menu-item">Link</a>
      <xui-dropdown is="xui-menu-item" text="Dropdown">
        <div is="xui-dropdown-menu" tabindex="-1">
          <div is="xui-dropdown-item">Action</div>
          <div is="xui-dropdown-item">Another Action</div>
          <div is="xui-dropdown-item">Something else here</div>
          <div is="xui-dropdown-divider" />
          <div is="xui-dropdown-item">Separated Link</div>
          <div is="xui-dropdown-divider" />
          <div is="xui-dropdown-item">One more separated link</div>
        </div>
      </xui-dropdown>
      <div is="xui-menu-menu" position="right">
        <div is="xui-menu-item">
          <div
            type="text"
            placeholder="Submit"
            is="xui-input"
            icon="search"
            inverted
            transparent
          />
        </div>
        <a is="xui-menu-item">Link</a>
      </div>
    </div>

    <div is="xui-menu" secondary>
      <div is="xui-menu-item" active>Link</div>
      <a is="xui-menu-item">Link</a>
      <!-- <div class="ui dropdown item" tabindex="0">
        Dropdown
        <i class="dropdown icon"></i>
        <div is="xui-menu" class="menu" tabindex="-1">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          <div class="item">Something else here</div>
          <div class="divider"></div>
          <div class="item">Separated Link</div>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
        </div>
      </div> -->
      <div is="xui-menu-menu" class="right menu">
        <div is="xui-menu-item">
          <div
            placeholder="Search"
            is="xui-input"
            action="Submit"
            icon="search"
            icon-position="left"
          />
          <!-- <div class="ui dropdown item" tabindex="0">
          Dropdown Left<i class="dropdown icon"></i>
          <div is="xui-menu" class="menu" tabindex="-1">
            <a class="item">Link</a>
            <a class="item">Link</a>
            <div class="divider"></div>
            <div class="header">Header</div>
            <div class="item">
              <i class="dropdown icon"></i>
              Sub Menu
              <div is="xui-menu" class="menu">
                <a class="item">Link</a>
                <div class="item">
                  <i class="dropdown icon"></i>
                  Sub Sub Menu
                  <div is="xui-menu" class="menu">
                    <a class="item">Link</a>
                    <a class="item">Link</a>
                  </div>
                </div>
                <a class="item">Link</a>
              </div>
            </div>
            <a class="item">Link</a>
          </div> -->
        </div>
        <a is="xui-menu-item">Link</a>
      </div>
    </div>

    <div is="xui-grid" :columns="3" doubling>
      <div is="xui-grid-column">
        <div is="xui-menu" secondary pointing>
          <div is="xui-menu-item" active>Link</div>
          <a is="xui-menu-item">Link</a>
          <a is="xui-menu-item">Link</a>
        </div>
      </div>

      <div is="xui-grid-column">
        <div is="xui-menu" tabular>
          <div is="xui-menu-item" active>Link</div>
          <a is="xui-menu-item">Link</a>
          <a is="xui-menu-item">Link</a>
        </div>
      </div>

      <div is="xui-grid-column">
        <div is="xui-menu" pointing>
          <div is="xui-menu-item" active>Link</div>
          <a is="xui-menu-item">Link</a>
          <div is="xui-menu-item" position="right">
            Right Text
          </div>
        </div>
      </div>
    </div>

    <div style="clear: both; display: block;"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.ui.menu:last-child {
  margin-bottom: 110px;
}

.ui.menu {
  margin: 3em 0em;
}
</style>
