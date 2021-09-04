import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiDropdownDivider',
  mixins: [VueXolasUIMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        role="option"
        class={this.classes('divider')}
      />
    );
  },
  meta: {
    parent: 'XuiDropdown',
  },
};
