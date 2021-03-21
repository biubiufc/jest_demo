<template>
  <div class="home">
    <MyInput></MyInput>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInput from "../components//MyInput.vue";
export default {
  name: "Home",
  components: {
    MyInput
  },
  methods: {
    expect(fn) {
      return {
        tobe(val) {
          if (fn === val) {
            return true;
          } else {
            throw `toBe` + fn;
          }
        }
      };
    }
  }
};
</script>
