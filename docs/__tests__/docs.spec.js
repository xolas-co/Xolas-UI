import { mount, createLocalVue } from '@vue/test-utils';
import XuiVue from 'vue-xolas-ui';
import DocsWireframe from '../components/DocsWireframe.vue';
const exampleContext = require.context(
  '../definitions',
  true,
  /\.example.vue$/,
);

const localVue = createLocalVue();
localVue.use(XuiVue);
localVue.component('docs-wireframe', DocsWireframe);

describe.only('Examples', () => {
  const consoleError = global.console.error;

  beforeAll(() => {
    global.console.error = message => {
      throw new Error(message);
    };
  });

  afterAll(() => {
    global.console.error = consoleError;
  });

  exampleContext.keys().forEach(key => {
    const Example = exampleContext(key).default;
    describe(key, () => {
      it('should match snapshot', () => {
        const html = mount(Example, { localVue }).html();
        expect(html).toMatchSnapshot();
      });
    });
  });
});
