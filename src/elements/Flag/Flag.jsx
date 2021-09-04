import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'SuiFlag',
  mixins: [VueXolasUIMixin],
  props: {
    name: String,
  },
  render() {
    const ElementType = this.getElementType('i');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('flag', this.name)}
      />
    );
  },
};
