import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCommentText',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('text')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiComment',
  },
};
