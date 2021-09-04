<template>
  <div>
    <p>
      Control active pane from outside,
      <template>
        <a href="#" v-if="table.index !== 0" @click.prevent="activatePane(0)"
          >Circle</a
        >
        <span v-else>Circle</span> </template
      >,
      <template>
        <a href="#" v-if="table.index !== 1" @click.prevent="activatePane(1)"
          >Box</a
        >
        <span v-else>Box</span> </template
      >,
      <template>
        <a href="#" v-if="table.index !== 2" @click.prevent="activatePane(2)"
          >Triangle</a
        >
        <span v-else>Triangle</span> </template
      >,
    </p>

    <xui-divider hidden />

    <xui-table fixed compact="very">
      <xui-table-body>
        <xui-table-row>
          <xui-table-cell>Index</xui-table-cell>
          <xui-table-cell>{{ table.index }}</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Label</xui-table-cell>
          <xui-table-cell>{{ table.title }}</xui-table-cell>
        </xui-table-row>
        <xui-table-row>
          <xui-table-cell>Clicked on the Tab Pane</xui-table-cell>
          <xui-table-cell
            ><code>{{ table.inside }}</code></xui-table-cell
          >
        </xui-table-row>
      </xui-table-body>
    </xui-table>

    <xui-divider hidden />

    <xui-tab @change="handleChange" :active-index="activeIndex">
      <xui-tab-pane title="Circle">
        Circle
      </xui-tab-pane>
      <xui-tab-pane title="Box">
        Box
      </xui-tab-pane>
      <xui-tab-pane title="Triangle">
        Triangle
      </xui-tab-pane>
    </xui-tab>
  </div>
</template>

<script>
export default {
  name: 'OnTabChangeExample',
  data: () => ({
    table: {
      inside: null,
      index: null,
      name: null,
    },
    activeIndex: null,
  }),
  mounted() {
    this.activatePane(1);
  },
  methods: {
    activatePane(index) {
      this.table.index = +index;
      this.activeIndex = +index;
    },
    handleChange(e, activePane, index) {
      this.table.inside = !!e;
      this.table.index = +index;
      this.table.title = activePane.title;
    },
  },
};
</script>
