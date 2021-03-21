<template>
  <div>
    <input
      type="text"
      v-model="value"
      maxlength="maxlength"
      @keyup.enter="handleInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    maxlength: Number
  },
  methods: {
    handleInput(event) {
      console.log(event);
      if (!event.target.value) return;
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style lang="scss"></style>
