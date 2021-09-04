import { VueXolasUIMixin } from '../../lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionContent',
  mixins: [VueXolasUIMixin],
  ...mixin,
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('content', this.dataActive && 'active')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
