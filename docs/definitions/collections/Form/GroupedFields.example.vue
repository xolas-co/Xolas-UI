<template lang="html">
  <xui-form>
    <xui-form-fields grouped>
      <xui-form-field>
        <xui-checkbox radio name="second_fruit" label="Apples" value="1" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="second_fruit" label="Oranges" value="2" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="second_fruit" label="Pears" value="3" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox radio name="second_fruit" label="Grapefruit" value="4" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'GroupedFieldsExample',
};
</script>
