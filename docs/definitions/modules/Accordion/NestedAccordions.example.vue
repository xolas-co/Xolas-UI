<template lang="html">
  <div>
    <xui-accordion exclusive styled>
      <xui-accordion-title>Level 1</xui-accordion-title>
      <xui-accordion-content active>
        Welcome to level 1
        <xui-accordion exclusive styled>
          <xui-accordion-title>Level 1A</xui-accordion-title>
          <xui-accordion-content active>
            Level 1A Contents
            <xui-accordion exclusive styled>
              <xui-accordion-title>Level 1A-A</xui-accordion-title>
              <xui-accordion-content>Level 1A-A Contents</xui-accordion-content>
              <xui-accordion-title>Level 1A-B</xui-accordion-title>
              <xui-accordion-content>Level 1A-B Contents</xui-accordion-content>
            </xui-accordion>
          </xui-accordion-content>
          <xui-accordion-title>Level 1B</xui-accordion-title>
          <xui-accordion-content>Level 1B Contents</xui-accordion-content>
          <xui-accordion-title>Level 1C</xui-accordion-title>
          <xui-accordion-content>Level 1C Contents</xui-accordion-content>
        </xui-accordion>
      </xui-accordion-content>
      <xui-accordion-title>Level 2</xui-accordion-title>
      <xui-accordion-content>
        Welcome to level 2
        <xui-accordion exclusive styled>
          <xui-accordion-title>Level 2A</xui-accordion-title>
          <xui-accordion-content active>
            Level 2A Contents
            <xui-accordion exclusive styled>
              <xui-accordion-title>Level 2A-A</xui-accordion-title>
              <xui-accordion-content>Level 2A-A Contents</xui-accordion-content>
              <xui-accordion-title>Level 2A-B</xui-accordion-title>
              <xui-accordion-content>Level 2A-B Contents</xui-accordion-content>
            </xui-accordion>
          </xui-accordion-content>
          <xui-accordion-title>Level 2B</xui-accordion-title>
          <xui-accordion-content>Level 2B Contents</xui-accordion-content>
          <xui-accordion-title>Level 2C</xui-accordion-title>
          <xui-accordion-content>Level 2C Contents</xui-accordion-content>
        </xui-accordion>
      </xui-accordion-content>
    </xui-accordion>
  </div>
</template>

<script>
export default {
  name: 'NestedAccordionsExample',
};
</script>
