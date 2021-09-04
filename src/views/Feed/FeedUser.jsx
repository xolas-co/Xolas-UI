import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiFeedUser',
  mixins: [VueXolasUIMixin],
  description: 'A feed can contain a user element',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
  },
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('user')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiFeed',
  },
};
