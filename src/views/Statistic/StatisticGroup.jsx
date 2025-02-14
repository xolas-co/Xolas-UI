import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiStatisticsGroup',
  mixins: [VueXolasUIMixin],
  props: {
    horizontal: Boolean,
    columns: Enum.Number(),
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.num(this.columns),
          'ui',
          'statistics',
          this.horizontal && 'horizontal',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiStatistic',
  },
};
