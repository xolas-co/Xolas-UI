import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiCardContent',
  mixins: [VueXolasUIMixin],
  props: {
    extra: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.extra && 'extra', 'content')}
      >
        {this.$slots.default}
        {this.$slots.right && (
          <div class="right floated">{this.$slots.right}</div>
        )}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
