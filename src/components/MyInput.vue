<template>
  <div>
    <input type="text" v-model="value" maxlength="maxlength" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    maxlength: Number
  }
};
</script>
<style lang="scss"></style>
