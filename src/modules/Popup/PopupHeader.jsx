import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiPopupHeader',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType {...this.getChildPropsAndListeners()} class="header">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiPopup',
  },
};
