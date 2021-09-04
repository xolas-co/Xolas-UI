import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiStepDescription',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="description">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStep',
  },
};
