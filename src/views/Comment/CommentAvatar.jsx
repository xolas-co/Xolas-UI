import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiCommentAvatar',
  mixins: [VueXolasUIMixin],
  props: {
    src: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('avatar')}
      >
        <img src={this.src} />
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiComment',
  },
};
