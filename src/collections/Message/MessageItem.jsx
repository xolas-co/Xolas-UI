import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiMessageItem',
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
    parent: 'SuiMessage',
  },
};
