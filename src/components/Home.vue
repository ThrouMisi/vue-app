<template>
  <div class="home">
    <div>
      <h1>todoList</h1>
      <Todo />
    </div>
    <div>
      <h1>DoneList</h1>
      <done-todo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import DoneTodo from '@/components/DoneTodo.vue'
export default {
  name: "home",
  components: {
    Todo,
    DoneTodo
  }
};
</script>
