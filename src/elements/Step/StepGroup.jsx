import XuiStep from './Step';
import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiStepGroup',
  components: { XuiStep },
  mixins: [VueXolasUIMixin],
  props: {
    ordered: Boolean,
    steps: Array,
    vertical: Boolean,
    stackable: Boolean,
    unstackable: Boolean,
    fluid: Boolean,
    attached: Enum.Attached({
      type: Boolean,
    }),
    stepNumber: Enum.Number({
      type: String,
      description: 'Defined number of steps',
    }),
    size: Enum.Size({
      type: String,
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.stepNumber && this.num(this.stepNumber),
          this.ordered && 'ordered',
          this.vertical && 'vertical',
          this.fluid && 'fluid',
          this.stackable && 'tablet stackable',
          this.unstackable && 'unstackable',
          this.attached,
          this.attached && 'attached',
          this.size,
          'steps',
        )}
      >
        {this.steps
          ? this.steps.map(props => <XuiStep {...{ props }} />)
          : this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStep',
  },
};
