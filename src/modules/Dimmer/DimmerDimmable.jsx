import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiDimmerDimmable',
  mixins: [VueXolasUIMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('dimmable')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiDimmer',
  },
};
