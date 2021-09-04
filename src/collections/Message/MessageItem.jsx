import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiMessageItem',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType('li');
    return (
      <ElementType {...this.getChildPropsAndListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiMessage',
  },
};
