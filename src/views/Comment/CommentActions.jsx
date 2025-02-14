import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCommentActions',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('actions')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiComment',
  },
};
