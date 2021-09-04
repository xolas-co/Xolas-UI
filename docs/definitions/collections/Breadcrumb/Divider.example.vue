<template lang="html">
  <div>
    <xui-breadcrumb>
      <xui-breadcrumb-section link>Home</xui-breadcrumb-section>
      <xui-breadcrumb-divider>/</xui-breadcrumb-divider>
      <xui-breadcrumb-section link>Registration</xui-breadcrumb-section>
      <xui-breadcrumb-divider>/</xui-breadcrumb-divider>
      <xui-breadcrumb-section active
        >Personal Information</xui-breadcrumb-section
      >
    </xui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DividerExample',
};
</script>
