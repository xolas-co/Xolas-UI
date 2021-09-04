import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCard',
  mixins: [VueXolasUIMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', 'card')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
