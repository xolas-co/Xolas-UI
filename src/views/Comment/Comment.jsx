import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiComment',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', 'comment')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
