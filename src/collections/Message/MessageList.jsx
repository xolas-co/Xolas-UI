import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiMessageList',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType('ul');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('list')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
