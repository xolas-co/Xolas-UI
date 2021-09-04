<template lang="html">
  <xui-form>
    <xui-form-fields grouped>
      <label>How often do you use checkboxes?</label>
      <xui-form-field>
        <xui-checkbox label="Once a week" radio value="1" v-model="value" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox
          label="2-3 times a week"
          radio
          value="2"
          v-model="value"
        />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox label="Once a day" radio value="3" v-model="value" />
      </xui-form-field>
      <xui-form-field>
        <xui-checkbox label="Twice a day" radio value="4" v-model="value" />
      </xui-form-field>
    </xui-form-fields>
    Value: {{ value }}
  </xui-form>
</template>

<script>
export default {
  name: 'RadioGroupInlineExample',
  data() {
    return {
      value: '2',
    };
  },
};
</script>
