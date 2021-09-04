import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiHeaderSubheader',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="sub header">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiHeader',
  },
};
