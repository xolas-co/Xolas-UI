import { VueXolasUIMixin } from '../../lib';
import XuiBreadcrumbSection from './BreadcrumbSection';
import XuiBreadcrumbDivider from './BreadcrumbDivider';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiBreadcrumb',
  components: { XuiBreadcrumbDivider, XuiBreadcrumbSection },
  mixins: [VueXolasUIMixin],
  props: {
    icon: String,
    sections: Array,
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.size, 'breadcrumb')}
      >
        {this.$slots.default ||
          this.sections.map(({ active, content, key, link }, index) => {
            const sectionEl = (
              <XuiBreadcrumbSection key={key} active={active} link={link}>
                {content}
              </XuiBreadcrumbSection>
            );

            if (index === 0) return sectionEl;

            return [
              ' ',
              <XuiBreadcrumbDivider icon={this.icon} />,
              ' ',
              sectionEl,
            ];
          })}
      </ElementType>
    );
  },
};
