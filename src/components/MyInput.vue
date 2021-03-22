<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      maxlength="maxlength"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @focus="show=true"
      @blur="show=false"
    />
    <ul v-show="show">
      <li v-for="item in historyRecord" :key="item">{{item}}</li>
      <li v-show="!historyRecord.length">暂无历史记录</li>
    </ul>
  </div>
</template>
<script>
 import store from "../store";
 import { mapActions } from 'vuex'
export default {
  data(){
    return{
      inputValue:this.value,
      show:false
    }
  },
  watch:{
    value(val){
      this.inputValue = val;
    },
  },
  computed:{
    historyRecord(){
      return store.state.records
    }
  },
  props: {
    value: {
      type: [String, Number],
    },
    maxlength: Number
  },
  methods: {
     ...mapActions(['incrementRecord']),
    handleEnter(event) {
      this.inputValue = ""
      if (!event.target.value) return;
      store.dispatch('incrementRecord',event.target.value)
      this.$emit("handleEnter", event.target.value);
    },
    handleInput(event){
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style lang="scss">
li{
  list-style: none;
}
li:nth-child(2n){
  background-color: #eee;
}
</style>
