import { shallowMount } from '@vue/test-utils';
import StepGroup from 'vue-xolas-ui/elements/Step/StepGroup';

describe('StepGroup', () => {
  it('should have class "three" when pass number/string', () => {
    const stepGroup = shallowMount(StepGroup, { propsData: { stepNumber: 3 } });
    const stepGroup2 = shallowMount(StepGroup, {
      propsData: { stepNumber: 'three' },
    });
    expect(stepGroup.classes()).toContain('three');
    expect(stepGroup2.classes()).toContain('three');
  });
});
