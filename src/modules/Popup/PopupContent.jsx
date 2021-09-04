import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiPopupContent',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiPopup',
  },
};
