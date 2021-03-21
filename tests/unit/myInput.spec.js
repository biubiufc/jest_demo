import { shallowMount } from "@vue/test-utils";
import MyInput from "@/components/MyInput.vue";

describe("HelloWorld.vue", () => {
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
});
