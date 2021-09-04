import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiTableHeader',
  mixins: [VueXolasUIMixin],
  props: {
    fullWidth: Boolean,
  },
  render() {
    const ElementType = this.getElementType('thead');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.fullWidth && 'full-width')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
