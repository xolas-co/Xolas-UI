<template lang="html">
  <div>
    <xui-breadcrumb>
      <xui-breadcrumb-section link>Home</xui-breadcrumb-section>
      <xui-breadcrumb-divider icon="right chevron" />
      <xui-breadcrumb-section link>Registration</xui-breadcrumb-section>
      <xui-breadcrumb-divider icon="right arrow" />
      <xui-breadcrumb-section active
        >Personal Information</xui-breadcrumb-section
      >
    </xui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DividerArrowExample',
};
</script>
