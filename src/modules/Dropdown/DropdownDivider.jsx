import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiDropdownDivider',
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
    parent: 'SuiDropdown',
  },
};
