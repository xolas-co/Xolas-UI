<template lang="html">
  <div class="theming-container" is="xui-container">
    <h1 class="docs-header">Theming Examples</h1>

    <h2 is="xui-header" dividing>Site</h2>
    <docs-site />

    <h2 is="xui-header" dividing>Menu</h2>
    <docs-menu />

    <h2 is="xui-header" dividing>Buttons</h2>
    <docs-buttons />

    <h2 is="xui-header" dividing>Table</h2>
    <docs-table />

    <h2 is="xui-header" dividing>Input</h2>
    <docs-input />

    <h2 is="xui-header" dividing>Card</h2>
    <docs-card />
  </div>
</template>

<script>
import DocsSite from './Site';
import DocsMenu from './Menu';
import DocsButtons from './Buttons';
import DocsTable from './Table';
import DocsInput from './Input';
import DocsCard from './Card';

export default {
  components: {
    DocsSite,
    DocsMenu,
    DocsButtons,
    DocsTable,
    DocsInput,
    DocsCard,
  },
};
</script>

<style lang="css">
.theming-container {
  padding-top: 3em;
}

.docs-header {
  font-size: 3em;
  text-align: center;
  font-weight: normal;
}

.theming-container > h2.dividing.header {
  font-size: 2em;
  font-weight: normal;
  margin: 4em 0em 3em;
}
</style>
