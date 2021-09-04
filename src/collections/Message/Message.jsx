import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import XuiIcon from '../../elements/Icon/Icon';
import XuiMessageContent from './MessageContent';
import XuiMessageHeader from './MessageHeader';
import XuiMessageItem from './MessageItem';
import XuiMessageList from './MessageList';

export default {
  name: 'XuiMessage',
  components: {
    XuiIcon,
    XuiMessageContent,
    XuiMessageHeader,
    XuiMessageItem,
    XuiMessageList,
  },
  mixins: [VueXolasUIMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
    dismissable: {
      type: Boolean,
      description: 'A message can be dismissable',
    },
    header: {
      type: String,
      description: 'Shorthand for XuiMessageHeader.',
    },
    icon: {
      type: [Boolean, String],
      description: 'A message can contain an icon.',
    },
    list: {
      type: Array,
      description: 'Array shorthand items for the XuiMessageList',
    },
    size: Enum(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'], {
      description: 'A message can have different sizes.',
    }),
    attached: Enum(['bottom', 'top'], {
      type: Boolean,
      description:
        'A message can be formatted to attach itself to other content.',
    }),
    color: Enum.Color({
      description: 'A message can be formatted to be different colors.',
    }),
    compact: {
      type: Boolean,
      description: 'A message can only take up the width of its content.',
    },
    floating: {
      type: Boolean,
      description: 'A message can float above content that it is related to.',
    },
    info: {
      type: Boolean,
      description: 'A message may be formatted to display information.',
    },
    warning: {
      type: Boolean,
      description: 'A message may be formatted to display warning messages.',
    },
    error: {
      type: Boolean,
      description:
        'A message may be formatted to display a negative message. Same as `negative`.',
    },
    negative: {
      type: Boolean,
      description:
        'A message may be formatted to display a negative message. Same as `error`.',
    },
    success: {
      type: Boolean,
      description:
        'A message may be formatted to display a positive message. Same as `positive`.',
    },
    positive: {
      type: Boolean,
      description:
        'A message may be formatted to display a positive message. Same as `success`.',
    },
    hidden: {
      type: Boolean,
      description: 'A message can be hidden.',
    },
    visible: {
      type: Boolean,
      description:
        'A message can be set to visible to force itself to be shown.',
    },
  },
  events: {
    dismiss: {
      custom: true,
    },
  },
  methods: {
    handleDismiss() {
      this.$emit('dismiss');
    },
  },
  render() {
    const content = [
      this.header && <XuiMessageHeader>{this.header}</XuiMessageHeader>,
      this.content,
      this.$slots.default,
      this.list && (
        <XuiMessageList>
          {this.list.map(item => (
            <XuiMessageItem>{item}</XuiMessageItem>
          ))}
        </XuiMessageList>
      ),
    ];

    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.color,
          this.size,
          this.floating && 'floating',
          this.info && 'info',
          this.warning && 'warning',
          this.success && 'success',
          this.positive && 'positive',
          this.error && 'error',
          this.negative && 'negative',
          this.attached,
          this.attached && 'attached',
          this.icon && 'icon',
          this.compact && 'compact',
          this.hidden && 'hidden',
          this.visible && 'visible',
          'message',
        )}
      >
        {this.dismissable && (
          <XuiIcon name="close" nativeOnClick={this.handleDismiss} />
        )}
        {typeof this.icon === 'string' && <XuiIcon name={this.icon} />}
        {!this.icon && content}
      </ElementType>
    );
  },
};
