<template>
  <div>
    <xui-label v-for="color in colors" circular :color="color" :key="color">
      2
    </xui-label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
      ],
    };
  },
};
</script>
