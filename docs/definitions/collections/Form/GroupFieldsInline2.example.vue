<template lang="html">
  <xui-form>
    <xui-form-fields inline>
      <label for="fruit">Select your favorite fruit:</label>
      <xui-form-field>
        <xui-checkbox radio name="fruit" label="Apples" value="1" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="fruit" label="Oranges" value="2" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="fruit" label="Pears" value="3" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="fruit" label="Grapefruit" value="4" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'GroupFieldsInline2Example',
};
</script>
