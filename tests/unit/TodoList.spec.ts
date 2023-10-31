import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("TodoList.vue", () => {
    it("renders the input box", () => {
        const wrapper = mount(TodoList);
        expect(wrapper.find("input[type=\"text\"]").exists()).toBe(true);
    })

    it('input box should update its value when typed into', async () => {
        const wrapper = mount(TodoList);
        const input = wrapper.find('input[type="text"]');
        await input.setValue('Test Todo');
        expect((input.element as HTMLInputElement).value).toBe('Test Todo');
    })
});