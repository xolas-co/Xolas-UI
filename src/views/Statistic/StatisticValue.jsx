import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiStatisticValue',
  mixins: [VueXolasUIMixin],
  props: {
    text: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.text && 'text', 'value')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStatistic',
  },
};
