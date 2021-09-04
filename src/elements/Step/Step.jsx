import { VueXolasUIMixin } from '../../lib';
import XuiIcon from '../Icon/Icon';
import XuiStepContent from './StepContent';
import XuiStepTitle from './StepTitle';
import XuiStepDescription from './StepDescription';

export default {
  name: 'XuiStep',
  components: { XuiIcon, XuiStepContent, XuiStepTitle, XuiStepDescription },
  mixins: [VueXolasUIMixin],
  props: {
    active: Boolean,
    completed: Boolean,
    description: String,
    disabled: Boolean,
    icon: String,
    title: String,
    link: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.active && 'active',
          this.completed && 'completed',
          this.disabled && 'disabled',
          this.link && 'link',
          'step',
        )}
      >
        {this.icon && <XuiIcon name={this.icon} />}
        {this.title || this.description ? (
          <XuiStepContent>
            {this.title && <XuiStepTitle>{this.title}</XuiStepTitle>}
            {this.description && (
              <XuiStepDescription>{this.description}</XuiStepDescription>
            )}
          </XuiStepContent>
        ) : (
          this.$slots.default
        )}
      </ElementType>
    );
  },
};
