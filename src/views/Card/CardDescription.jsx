import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiCardDescription',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('description')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
