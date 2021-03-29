import { shallowMount , createLocalVue } from "@vue/test-utils";
import MyInput from "@/components/MyInput.vue";
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
describe("测试 input", () => {
  let actions
  let store
  let wrapper
  beforeEach(() => {
    actions = {
      incrementRecord: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
    wrapper = shallowMount(MyInput,{ store, localVue });
  })


  // 该组件有一个`input标签`
  it("MyInput includes input", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("MyInput default value is undefined", () => {
    const vm = wrapper.vm;
    expect(vm.$props.value).toBe(undefined);
  });

  it("Myinput has maxlenth", async() => {
    await wrapper.setProps({ maxlength: 2 })
    const vm = wrapper.vm;
    expect(vm.$props.maxlength).toBe(2);
  });

  it("No value pressing enter is invalid", () => {
  
    const input = wrapper.find("input");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().handleEnter).toBeFalsy();
  });

  it('enter after clear inputValue',async()=>{
    const vm = wrapper.vm;
    const input = wrapper.find("input")
    await input.setValue('some valu1e')
    await input.trigger("keyup.enter");
    expect(vm.$data.inputValue).toBe("")
  })

  it('snapShot',()=>{
    const wrapper = shallowMount(MyInput, {
      propsData: {
        value: 222
      }
    });
    expect(wrapper).toMatchSnapshot()
  })


  
  it('test vuex',async()=>{
    const input = wrapper.find('input')
    input.element.value = 'input'
    await input.trigger("keyup.enter");
    expect(actions.incrementRecord).toHaveBeenCalled()
  })
 
});


