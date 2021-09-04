import { VueXolasUIMixin } from '../../lib';
import SuiStepDescription from './StepDescription';
import SuiStepTitle from './StepTitle';

export default {
  name: 'SuiStepContent',
  components: { SuiStepDescription, SuiStepTitle },
  mixins: [VueXolasUIMixin],
  props: {
    description: String,
    title: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.title && <SuiStepTitle>{this.title}</SuiStepTitle>}
        {this.description && (
          <SuiStepDescription>{this.description}</SuiStepDescription>
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
