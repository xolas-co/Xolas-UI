import { VueXolasUIMixin } from '../../lib';
import { FeedDate, FeedUser } from './';

export default {
  name: 'XuiFeedSummary',
  mixins: [VueXolasUIMixin],
  description: 'A feed can contain a summary',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    date: {
      type: String,
      description: 'Shorthand for XuiFeedDate',
    },
    user: {
      type: String,
      description: 'Shorthand for XuiFeedUser',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('summary')}
      >
        {this.$slots.default || [
          this.user && <FeedUser content={this.user} />,
          this.content,
          this.date && <FeedDate content={this.date} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiFeed',
  },
};
