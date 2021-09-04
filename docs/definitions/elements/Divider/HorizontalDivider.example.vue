<template>
  <div class="ui center aligned basic segment">
    <div class="ui left icon action input">
      <i class="search icon"></i>
      <input type="text" placeholder="Order #" />
      <div class="ui blue submit button">Search</div>
    </div>

    <xui-divider horizontal>Or</xui-divider>

    <div class="ui teal labeled icon button">
      Create New Order
      <i class="add icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalDividerExample',
};
</script>
