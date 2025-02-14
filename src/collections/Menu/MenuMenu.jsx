import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiMenuMenu',
  mixins: [VueXolasUIMixin],
  props: {
    position: Enum(['left', 'right'], {
      description: 'A sub menu can take left or right position',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.position, 'menu')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiMenu',
  },
};
