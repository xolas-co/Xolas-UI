import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiLabelDetail',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="detail">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiLabel',
  },
};
