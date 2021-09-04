import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiLabelDetail',
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
    parent: 'SuiLabel',
  },
};
