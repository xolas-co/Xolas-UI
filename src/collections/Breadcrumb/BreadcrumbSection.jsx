import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiBreadcrumbSection',
  mixins: [VueXolasUIMixin],
  props: {
    active: Boolean,
    link: Boolean,
  },
  render() {
    const ElementType = this.getElementType(this.link ? 'a' : 'div');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.active && 'active',
          this.link && 'link',
          'section',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiBreadcrumb',
  },
};
