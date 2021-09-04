// import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import DropdownDivider from 'vue-xolas-ui/modules/Dropdown/DropdownDivider';

describe('Dropdown', () => {
  describe('DropdownDivider', () => {
    common.testTag(DropdownDivider, 'div');
    common.testClass(DropdownDivider, ['divider']);
  });
});
