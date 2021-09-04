import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiStepTitle',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="title">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStep',
  },
};
