<template lang="html">
  <div>
    <h5 is="xui-header" attached="top">
      Dogs
    </h5>
    <xui-segment attached>
      <p>Dogs are one type of animal</p>
    </xui-segment>
    <h5 is="xui-header" attached>
      Cats
    </h5>
    <xui-segment attached>
      <p>
        Cats are thought of as being related to dogs, but only humans think
        this.
      </p>
    </xui-segment>
    <h5 is="xui-header" attached>
      Lions
    </h5>
    <xui-segment attached>
      <p>Humans don't think of lions as being like cats, but they are.</p>
    </xui-segment>
  </div>
</template>

<script>
export default {
  name: 'Attached2Example',
};
</script>
