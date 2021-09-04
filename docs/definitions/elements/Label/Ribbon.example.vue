<template>
  <xui-grid :columns="2">
    <xui-grid-column>
      <xui-segment raised>
        <a is="xui-label" color="red" ribbon>
          Overview
        </a>
        <span>Account Details</span>

        <docs-wireframe name="paragraph" />

        <a is="xui-label" color="blue" ribbon>
          Community
        </a>
        <span>User Reviews</span>

        <docs-wireframe name="paragraph" />
      </xui-segment>
    </xui-grid-column>

    <xui-grid-column>
      <xui-segment>
        <a is="xui-label" color="orange" ribbon="right">
          Specs
        </a>
        <docs-wireframe name="paragraph" />

        <a is="xui-label" color="teal" ribbon="right">
          Reviews
        </a>
        <docs-wireframe name="paragraph" />
      </xui-segment>
    </xui-grid-column>
  </xui-grid>
</template>

<script>
export default {};
</script>
