<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 col-md-6 col-sm-6">
        <h1>todoList</h1>
        <button class="create-button btn btn-primary" @click="openCreateModal()">Create new todo</button>
        <Todo />
      </div>
      <div class="col-xs-6 col-md-6 col-sm-6">
        <h1>DoneList</h1>
        <done-todo />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import DoneTodo from '@/components/DoneTodo.vue'
import createModal from './createModal.vue'


export default {
  name: "home",
  components: {
    Todo,
    DoneTodo
  },
  methods: {
    openCreateModal () {
      this.$modal.show(createModal);
    }
  }
};
</script>
<style scoped lang="scss">
.create-button {
  padding: 6px 70px;
}
</style>
