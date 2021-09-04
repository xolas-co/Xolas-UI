import { VueXolasUIMixin } from '../../lib';
import XuiIcon from '../Icon/Icon';

export default {
  ...XuiIcon,
  name: 'XuiListIcon',
  mixins: [VueXolasUIMixin],
  meta: {
    parent: 'XuiList',
  },
};
