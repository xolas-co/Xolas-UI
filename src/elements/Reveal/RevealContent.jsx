import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiRevealContent',
  mixins: [VueXolasUIMixin],
  props: {
    visible: Boolean,
    hidden: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.hidden && 'hidden',
          this.visible && 'visible',
          'content',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiReveal',
  },
};
