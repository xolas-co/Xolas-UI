import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiSidebarPushable',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="pushable">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiSidebar',
  },
};
