<template lang="html">
  <xui-form>
    <xui-form-fields fields="two">
      <xui-form-field>
        <label>First Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </xui-form-field>
      <xui-form-field>
        <label>Last Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'FormReadOnlyExample',
};
</script>
