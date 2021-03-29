import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MyInput from "@/components/MyInput.vue";
const localVue = createLocalVue()
import store from '@/store'

localVue.use(Vuex)

describe('Actions.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(MyInput,{ store, localVue });
  })

  it("test myinput", async() => {
    await wrapper.setProps({ value:'121121'})
    const input = wrapper.find("input");
    input.trigger("keyup.enter");
    console.log(store.state.records)
    expect(store.state.records).toEqual([ '121121' ]);
  });
})
 

 