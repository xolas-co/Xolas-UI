import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiCardGroup',
  mixins: [VueXolasUIMixin],
  props: {
    itemsPerRow: Enum.Number(),
    stackable: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.num(this.itemsPerRow),
          this.stackable && 'stackable',
          'cards',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiCard',
  },
};
