import { shallowMount , createLocalVue  } from "@vue/test-utils";
import MyInput from "@/components/MyInput.vue";
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe("HelloWorld.vue", () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      incrementRecord: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state: {
        records: []
      },
    })
  })
  it("MyInput includes input", () => {
    const wrapper = shallowMount(MyInput);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("MyInput default value is undefined", () => {
    const wrapper = shallowMount(MyInput);
    const vm = wrapper.vm;
    expect(vm.$props.value).toBe(undefined);
  });

  it("Myinput has maxlenth", () => {
    const wrapper = shallowMount(MyInput, {
      propsData: {
        maxlength: 2
      }
    });
    const vm = wrapper.vm;
    expect(vm.$props.maxlength).toBe(2);
  });

  it("No value pressing enter is invalid", () => {
    const wrapper = shallowMount(MyInput, {
      propsData: {
        value: ""
      }
    });
    const input = wrapper.find("input");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().handleEnter).toBeFalsy();
  });

  it('enter after clear inputValue',async()=>{
    const wrapper = shallowMount(MyInput);
    const vm = wrapper.vm;
    const input = wrapper.find("input")
    await input.setValue('some value')
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

 
 
  it("pressing enter record value",async()=>{
    const wrapper = shallowMount(MyInput,{ store, localVue });
    const input = wrapper.find('input')
    await input.trigger("keyup.enter");
    expect(actions.incrementRecord).toBeCalled()
  })
});

