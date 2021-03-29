<template>
  <div class="home">
    <my-input v-model="myValue" @handleInput="handleInput" :maxlength="2"></my-input>
    <actions></actions>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInput from "@/components//MyInput.vue";
import Actions from "../components/Acitions";

export default {
  name: "Home",
  components: {
    MyInput,
    Actions
  },
  data(){
    return{
      myValue:""
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
