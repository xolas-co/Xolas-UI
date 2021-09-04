import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCommentAction',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType {...this.getChildPropsAndListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiComment',
  },
};
