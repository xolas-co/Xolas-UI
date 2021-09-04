import * as common from 'test/utils';
import FormField from 'vue-xolas-ui/collections/Form/FormField';

describe('Form', () => {
  describe('FormField', () => {
    common.testClassFromProps(FormField, [
      'inline',
      'required',
      'disabled',
      'error',
    ]);
    common.testClass(FormField, ['field']);
  });
});
