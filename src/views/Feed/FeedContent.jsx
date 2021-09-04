import { VueXolasUIMixin } from '../../lib';
import { FeedDate, FeedSummary, FeedExtra, FeedMeta } from './';

export default {
  name: 'XuiFeedContent',
  mixins: [VueXolasUIMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    date: {
      type: String,
      description: 'Shorthand for XuiFeedDate',
    },
    summary: {
      type: String,
      description: 'Shorthand for XuiFeedSummary',
    },
    extraImages: {
      type: Array,
      description: 'Shorthand for XuiFeedExtra with images',
    },
    extraText: {
      type: String,
      description: 'Shorthand for XuiFeedExtra with text',
    },
    meta: {
      type: String,
      description: 'Shorthand for XuiFeedMeta',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('content')}
      >
        {this.$slots.default || [
          this.date && <FeedDate content={this.date} />,
          this.content,
          this.summary && <FeedSummary content={this.summary} />,
          this.extraText && <FeedExtra text={true} content={this.extraText} />,
          this.extraImages && <FeedExtra images={this.extraImages} />,
          this.meta && <FeedMeta content={this.meta} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiFeed',
  },
};
