import { VueXolasUIMixin } from '../../lib';
import SuiIcon from '../Icon/Icon';

export default {
  ...SuiIcon,
  name: 'SuiListIcon',
  mixins: [VueXolasUIMixin],
  meta: {
    parent: 'SuiList',
  },
};
