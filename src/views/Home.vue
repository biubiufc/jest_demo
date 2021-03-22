<template>
  <div class="home">
    <my-input v-model="inputValue" @handleInput="handleInput"></my-input>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInput from "@/components//MyInput.vue";
export default {
  name: "Home",
  components: {
    MyInput
  },
  data(){
    return{
      inputValue:""
    }
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
    },
    handleInput(value){
      console.log(value)
    }
  }
};
</script>
