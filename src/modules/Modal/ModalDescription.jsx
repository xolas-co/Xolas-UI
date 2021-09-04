import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiModalDescription',
  mixins: [VueXolasUIMixin],
  props: {},
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
    parent: 'SuiModal',
  },
};
