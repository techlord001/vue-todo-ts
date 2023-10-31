<template>
  <div class="container mx-auto max-w-md p-6 bg-white rounded-md shadow-md">
    <div>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="What needs to be done?"
        class="p-2 w-full border rounded-md"
      />
    </div>
    <ul class="mt-4">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between p-2 border-b"
      >
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
        <input
          v-model="todo.completed"
          type="checkbox"
          name="completed"
          id=""
          class="mr-2"
        />
        <button
          @click="deleteTodo(todo.id)"
          class="text-red-500 hover:underline"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Todo from "@/types/Todo";

export default defineComponent({
  setup() {
    const newTodo = ref<string>("");
    const todos = ref<Todo[]>([]);

    const addTodo = () => {
      if (!newTodo.value) return;

      const todoText = newTodo.value.trim();

      todos.value.push({
        id: Date.now(),
        text: todoText,
        completed: false,
      });
    };

    const deleteTodo = (id: number) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    return { newTodo, todos, addTodo, deleteTodo };
  },
});
</script>

<style scoped lang="scss"></style>
