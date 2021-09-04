import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiDimmer',
  mixins: [VueXolasUIMixin],
  props: {
    active: Boolean,
    inverted: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.active && 'active',
          this.inverted && 'inverted',
          'dimmer',
        )}
      >
        <div class="content">
          <div class="center">{this.$slots.default}</div>
        </div>
      </ElementType>
    );
  },
};
