import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiListDescription',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="description">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiList',
  },
};
