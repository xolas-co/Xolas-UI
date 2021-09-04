<template lang="html">
  <xui-list>
    <xui-list-item>
      <xui-list-icon name="folder" />
      <xui-list-content>
        <xui-list-header>src</xui-list-header>
        <xui-list-description>Source files for project</xui-list-description>
        <xui-list-list>
          <xui-list-item>
            <xui-list-icon name="folder" />
            <xui-list-content>
              <xui-list-header>site</xui-list-header>
              <xui-list-description>Your site"s theme</xui-list-description>
            </xui-list-content>
          </xui-list-item>
          <xui-list-item>
            <xui-list-icon name="folder" />
            <xui-list-content>
              <xui-list-header>themes</xui-list-header>
              <xui-list-description>Packaged theme files</xui-list-description>
              <xui-list-list>
                <xui-list-item>
                  <xui-list-icon name="folder" />
                  <xui-list-content>
                    <xui-list-header>default</xui-list-header>
                    <xui-list-description
                      >Default packaged theme</xui-list-description
                    >
                  </xui-list-content>
                </xui-list-item>
                <xui-list-item>
                  <xui-list-icon name="folder" />
                  <xui-list-content>
                    <xui-list-header>my_theme</xui-list-header>
                    <xui-list-description>
                      Packaged themes are also available in this folder
                    </xui-list-description>
                  </xui-list-content>
                </xui-list-item>
              </xui-list-list>
            </xui-list-content>
          </xui-list-item>
          <xui-list-item>
            <xui-list-icon name="file" />
            <xui-list-content>
              <xui-list-header>theme.config</xui-list-header>
              <xui-list-description
                >Config file for setting packaged themes</xui-list-description
              >
            </xui-list-content>
          </xui-list-item>
        </xui-list-list>
      </xui-list-content>
    </xui-list-item>
    <xui-list-item>
      <xui-list-icon name="folder" />
      <xui-list-content>
        <xui-list-header>dist</xui-list-header>
        <xui-list-description>Compiled CSS and JS files</xui-list-description>
        <xui-list-list>
          <xui-list-item>
            <xui-list-icon name="folder" />
            <xui-list-content>
              <xui-list-header>components</xui-list-header>
              <xui-list-description
                >Individual component CSS and JS</xui-list-description
              >
            </xui-list-content>
          </xui-list-item>
        </xui-list-list>
      </xui-list-content>
    </xui-list-item>
    <xui-list-item>
      <xui-list-icon name="file" />
      <xui-list-content>
        <xui-list-header>semantic.json</xui-list-header>
        <xui-list-description
          >Contains build settings for gulp</xui-list-description
        >
      </xui-list-content>
    </xui-list-item>
  </xui-list>
</template>

<script>
export default {
  name: 'ListShorthandExample',
};
</script>
