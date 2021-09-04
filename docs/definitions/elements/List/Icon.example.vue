<template>
  <xui-list>
    <a is="xui-list-item">
      <xui-icon name="help" />
      <xui-list-content>
        <xui-list-header>Floated Icon</xui-list-header>
        <xui-list-description>
          This text will always have a left margin to make sure it sits
          alongside your icon
        </xui-list-description>
      </xui-list-content>
    </a>
    <a is="xui-list-item">
      <xui-icon name="right triangle" />
      <xui-list-content>
        <xui-list-header>Icon Alignment</xui-list-header>
        <xui-list-description>
          Floated icons are by default top aligned. To have an icon top aligned
          try this example.
        </xui-list-description>
      </xui-list-content>
    </a>
    <xui-list-item>
      <xui-icon name="help" />
      Inline Text
    </xui-list-item>
  </xui-list>
</template>

<script>
export default {};
</script>
