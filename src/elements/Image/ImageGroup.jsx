import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiImageGroup',
  mixins: [VueXolasUIMixin],
  props: {
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType('div');

    return (
      <ElementType class={this.classes('ui', this.size, 'images')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiImage',
  },
};
