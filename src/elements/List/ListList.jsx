import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiListList',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="list">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiList',
  },
};
