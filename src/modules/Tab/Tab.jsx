import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiTab',
  props: {
    menu: {
      type: Object,
      default: () => ({
        attached: true,
        tabular: true,
      }),
    },
    menuPosition: Enum(['left', 'right'], {
      description: 'Menu Position',
    }),
    activeIndex: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    tabs: [],
    activeTab: null,
  }),
  computed: {
    tabMenu() {
      return (
        <xui-menu {...{ props: this.menu }}>
          {this.tabs.map(tab => (
            <a
              class={['item', { active: tab.active, disabled: tab.disabled }]}
              onClick={e => this.openTab(e, tab)}
            >
              {tab.icon && <xui-icon name={tab.icon} />}
              <span>{tab.title}</span>
              {tab.label && <xui-label>{tab.label}</xui-label>}
            </a>
          ))}
        </xui-menu>
      );
    },
  },
  watch: {
    activeIndex(newIndex) {
      this.openTab(null, this.tabs[+newIndex]);
    },
  },
  mounted() {
    if (!this.tabs.length) {
      throw new Error('tab used without tab-pane');
    }

    const pane = this.tabs[this.activeIndex] || this.tabs[0];
    pane.open();

    this.activeTab = pane;
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);
    },
    openTab(e, tab) {
      if (tab.disabled) {
        return;
      }

      this.activeTab.close();
      tab.open();

      const index = this.tabs.indexOf(tab);

      this.$emit('change', e, tab, index);
      this.$emit('update:activeIndex', index);

      this.activeTab = tab;
    },
  },
  render() {
    const slot = this.$slots.default;

    let renderable = [this.tabMenu, slot];

    if (this.menu.attached === 'bottom') {
      renderable.reverse();
    }

    if (this.menu.vertical) {
      renderable = [
        <xui-grid-column width={4}>{this.tabMenu}</xui-grid-column>,
        <xui-grid-column width={12} class="stretched">
          {slot}
        </xui-grid-column>,
      ];

      if (this.menu.tabular === 'right' || this.menuPosition === 'right') {
        renderable.reverse();
      }

      renderable = (
        <xui-grid>
          <xui-grid-row>{renderable}</xui-grid-row>
        </xui-grid>
      );
    }

    return (
      <div>{Array.isArray(renderable) ? [...renderable] : renderable}</div>
    );
  },
};
