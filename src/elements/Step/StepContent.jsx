import { VueXolasUIMixin } from '../../lib';
import XuiStepDescription from './StepDescription';
import XuiStepTitle from './StepTitle';

export default {
  name: 'XuiStepContent',
  components: { XuiStepDescription, XuiStepTitle },
  mixins: [VueXolasUIMixin],
  props: {
    description: String,
    title: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.title && <XuiStepTitle>{this.title}</XuiStepTitle>}
        {this.description && (
          <XuiStepDescription>{this.description}</XuiStepDescription>
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStep',
  },
};
