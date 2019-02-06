<template>
  <div class="todo">
    <div v-for="todo in Todos" v-bind:key="todo.id" class="todolist">
      <div>
        <div>
          {{ todo.name }}
        </div>
        <div>
          {{ todo.description }}
        </div>
        <div>
          <button @click="openModal(todo)">Edit</button>
        </div>
        <div>
          <button @click="deleteTodo(todo)">Delete</button>
        </div>
        <div>
          <input type="checkbox" id="checkbox" v-model="todo.isComplete" v-on:change="editTodo(todo)" />
          <label for="checkbox">Done</label>
        </div>
      </div>
    </div>
    <div class="createTodo">
      <form v-on:submit.prevent="createTodo">
        <input type="text" v-model="newTodo.name" />
        <input type="text" v-model="newTodo.description" />
        <button type="submit" name="button">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import editModal from './editModal.vue'

export default {
  name: "Todo",
  data() {
    return {
      newTodo: {
        name: "",
        description: ""
      }
    }
  },
  computed: {
    ...mapGetters("todos",{
      Todos: "Todos"
    })
  },
  methods: {
    createTodo() {
      if(this.newTodo){
        this.$store.dispatch("todos/createTodo", this.newTodo);
      }
      this.newTodo = {}
    },
    openModal (todo) {
      this.$modal.show(editModal, {
        Todo: todo
      });
    },
    deleteTodo(todo) {
      this.$store.dispatch("todos/deleteTodo",todo)
    },
    editTodo(todo) {
      this.$store.dispatch("todos/editTodo", todo);
    }
  },
  mounted() {
    this.$store.dispatch('todos/getAllTodos')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
