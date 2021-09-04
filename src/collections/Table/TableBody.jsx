import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiTableBody',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType('tbody');
    return (
      <ElementType {...this.getChildPropsAndListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
