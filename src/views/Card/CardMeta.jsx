import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCardMeta',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('meta')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiCard',
  },
};
