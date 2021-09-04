<template lang="html">
  <div>
    <xui-accordion exclusive styled>
      <xui-accordion-title active>
        <xui-icon name="dropdown" />
        What is a dog?
      </xui-accordion-title>
      <xui-accordion-content active>
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </xui-accordion-content>
      <xui-accordion-title>
        <xui-icon name="dropdown" />
        What kinds of dogs are there?
      </xui-accordion-title>
      <xui-accordion-content>
        <p>
          There are many breeds of dogs. Each breed varies in size and
          temperament. Owners often select a breed of dog that they find to be
          compatible with their own lifestyle and desires from a companion.
        </p>
      </xui-accordion-content>
      <xui-accordion-title>
        <xui-icon name="dropdown" />
        How do you acquire a dog?
      </xui-accordion-title>
      <xui-accordion-content>
        <p>
          Three common ways for a prospective owner to acquire a dog is from pet
          shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog
          from a private owner allows you to assess the pedigree and upbringing
          of your dog before choosing to take it home. Lastly, finding your dog
          from a shelter, helps give a good home to a dog who may not find one
          so readily.
        </p>
      </xui-accordion-content>
    </xui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionStyled',
};
</script>
