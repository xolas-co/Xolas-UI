<template lang="html">
  <div>
    <xui-accordion is="xui-menu" :active-index="1" vertical exclusive styled>
      <xui-accordion-title is="xui-menu-header" active>
        <xui-icon name="dropdown" />
        Size
      </xui-accordion-title>
      <xui-accordion-content active>
        <xui-form>
          <xui-form-field>
            <xui-checkbox label="Small" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="Medium" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="Large" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="X-Large" />
          </xui-form-field>
        </xui-form>
      </xui-accordion-content>
      <xui-accordion-title is="xui-menu-header">
        <xui-icon name="dropdown" />
        Colors
      </xui-accordion-title>
      <xui-accordion-content>
        <xui-form>
          <xui-form-field>
            <xui-checkbox label="Red" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="Orange" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="Green" />
          </xui-form-field>
          <xui-form-field>
            <xui-checkbox label="Blue" />
          </xui-form-field>
        </xui-form>
      </xui-accordion-content>
    </xui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionMenu',
};
</script>
