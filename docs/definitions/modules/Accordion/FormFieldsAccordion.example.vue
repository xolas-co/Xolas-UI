<template lang="html">
  <div>
    <xui-segment>
      <xui-form>
        <xui-form-field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </xui-form-field>
        <xui-form-field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </xui-form-field>
        <xui-form-field>
          <xui-accordion>
            <a is="xui-accordion-title">
              <xui-icon name="dropdown" />
              Optional Details
            </a>
            <xui-accordion-content>
              <label>Maiden Name</label>
              <input placeholder="Maiden Name" />
            </xui-accordion-content>
          </xui-accordion>
        </xui-form-field>
        <xui-button type="submit">Submit</xui-button>
      </xui-form>
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'FormFieldsAccordion',
};
</script>
