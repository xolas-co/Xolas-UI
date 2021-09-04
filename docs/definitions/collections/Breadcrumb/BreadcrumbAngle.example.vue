<template lang="html">
  <div>
    <div>
      <xui-breadcrumb>
        <xui-breadcrumb-section link>Home</xui-breadcrumb-section>
        <xui-breadcrumb-divider icon="right angle" />
        <xui-breadcrumb-section link>Store</xui-breadcrumb-section>
        <xui-breadcrumb-divider icon="right angle" />
        <xui-breadcrumb-section active>T-Shirt</xui-breadcrumb-section>
      </xui-breadcrumb>
    </div>

    <xui-breadcrumb icon="right angle" :sections="sections" />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExampleAngle',
  data() {
    return {
      sections: [
        { key: 'home', content: 'Home', link: true },
        { key: 'store', content: 'Store', link: true },
        { key: 'tshirt', content: 'T-Shirt', active: true },
      ],
    };
  },
};
</script>
