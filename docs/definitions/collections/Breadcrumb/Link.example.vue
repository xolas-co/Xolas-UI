<template lang="html">
  <div>
    <xui-breadcrumb>
      <xui-breadcrumb-section link>Home</xui-breadcrumb-section>
      <xui-breadcrumb-divider />
      <xui-breadcrumb-section link>Store</xui-breadcrumb-section>
      <xui-breadcrumb-divider icon="right chevron" />
      <xui-breadcrumb-section active>
        Search for:
        <a href="javascript:void 0">paper towels</a>
      </xui-breadcrumb-section>
    </xui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'LinkExample',
};
</script>
