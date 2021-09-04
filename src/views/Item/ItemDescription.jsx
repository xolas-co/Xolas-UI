import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiItemDescription',
  mixins: [VueXolasUIMixin],
  description:
    'An item can contain a description with a single or multiple paragraphs',
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType class={this.classes('description')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiItem',
  },
};
