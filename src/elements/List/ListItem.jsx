import { VueXolasUIMixin } from '../../lib';
import XuiListIcon from './ListIcon';
import XuiListContent from './ListContent';

export default {
  name: 'XuiListItem',
  components: { XuiListContent, XuiListIcon },
  mixins: [VueXolasUIMixin],
  props: {
    active: {
      type: Boolean,
      description: 'A list item can be active.',
    },
    content: String,
    icon: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('item', this.active && 'active')}
        role="listitem"
      >
        {this.icon && <XuiListIcon name={this.icon} />}
        {this.content ? (
          <XuiListContent>{this.content}</XuiListContent>
        ) : (
          this.$slots.default
        )}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiList',
  },
};
