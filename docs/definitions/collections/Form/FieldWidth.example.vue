<template lang="html">
  <xui-form>
    <xui-form-field>
      <xui-form-fields>
        <xui-form-field width="six">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </xui-form-field>
        <xui-form-field width="four">
          <label>Middle</label>
          <input type="text" placeholder="Middle Name" />
        </xui-form-field>
        <xui-form-field width="six">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </xui-form-field>
      </xui-form-fields>
      <xui-form-fields>
        <xui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </xui-form-field>
        <xui-form-field width="twelve">
          <input type="text" placeholder="12 Wide" />
        </xui-form-field>
        <xui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </xui-form-field>
      </xui-form-fields>
      <xui-form-fields>
        <xui-form-field width="eight">
          <input type="text" placeholder="8 Wide" />
        </xui-form-field>
        <xui-form-field width="six">
          <input type="text" placeholder="6 Wide" />
        </xui-form-field>
        <xui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </xui-form-field>
      </xui-form-fields>
    </xui-form-field>
  </xui-form>
</template>

<script>
export default {
  name: 'FieldWidthExample',
};
</script>
