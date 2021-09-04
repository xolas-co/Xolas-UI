import { VueXolasUIMixin } from '../../lib';
import { FeedLabel, FeedContent } from './';

export default {
  name: 'XuiFeedEvent',
  mixins: [VueXolasUIMixin],
  description: 'A feed contains an event',
  props: {
    content: {
      type: String,
      description: 'Shorthand for XuiFeedContent',
    },
    image: {
      type: String,
      description: 'An event can contain image label',
    },
    icon: {
      type: String,
      description: 'An event can contain icon label',
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
    const hasContent =
      this.content ||
      this.date ||
      this.summary ||
      this.extraImages ||
      this.extraText ||
      this.meta;
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('event')}
      >
        {this.image && <FeedLabel image={this.image} />}
        {this.icon && <FeedLabel icon={this.icon} />}
        {hasContent && (
          <FeedContent
            content={this.content}
            date={this.date}
            summary={this.summary}
            extraImages={this.extraImages}
            extraText={this.extraText}
            meta={this.meta}
          />
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiFeed',
  },
};
