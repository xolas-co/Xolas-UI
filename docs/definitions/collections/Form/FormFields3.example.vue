<template lang="html">
  <xui-form>
    <xui-form-fields inline>
      <xui-form-field width="eight">
        <label>Name</label>
        <input type="text" placeholder="First Name" />
      </xui-form-field>
      <xui-form-field width="three">
        <input type="text" placeholder="Middle Name" />
      </xui-form-field>
      <xui-form-field width="five">
        <input type="text" placeholder="Last Name" />
      </xui-form-field>
    </xui-form-fields>
  </xui-form>
</template>

<script>
export default {
  name: 'FormFields3Example',
};
</script>
