import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiSidebarPusher',
  mixins: [VueXolasUIMixin],
  props: {
    dimmed: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('pusher', this.dimmed && 'dimmed')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiSidebar',
  },
};
