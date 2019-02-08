<template>
  <div class="todo">
    <table class="table table-hover table-responsive">
      <thead>
        <tr>
          <th class="done-switch">Done</th>
          <th class="todo-name">Name</th>
          <th class="todo-description">Description</th>
          <th class="edit-delete-button">Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in Todos" v-bind:key="todo.id">
          <td>
            <input type="checkbox" id="checkbox" v-model="todo.isComplete" v-on:change="editTodo(todo)" />
          </td>
          <td class="todo-name-display" v-bind:title="todo.name" v-tippy="{ arrow : false, interactive : true, theme : 'light' }">
            {{todo.name}}
          </td>
          <td class="todo-descript-display" v-bind:title="todo.description" v-tippy="{ arrow : false, interactive : true, theme : 'light' }">
            {{todo.description}}
          </td>
          <td>
            <button class="edit-button btn col-md-6 active" @click="openEditModal(todo)"><img class=" img-responsive center-block" src="../assets/pen.png" alt="編集" /></button>
            <button class="delete-button btn col-md-6 active" @click="deleteTodo(todo)"><img class=" img-responsive center-block" src="../assets/dust-box.png" alt="消去" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import editModal from './editModal.vue'
import createModal from './createModal.vue'

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
    openEditModal (todo) {
      this.$modal.show(editModal, {
        Todo: todo
      });
    },
    openCreateModal () {
      this.$modal.show(createModal);
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
<style scoped lang="scss">
.todo {
  top: 10px;
  position: relative;
}
.edit-button .delete-button{
  padding: 0;
  border: none;
  background: transparent;
}

button img {
  display: block;
  width: 21px;
  position: relative;
  top: -3px;
  left: 7px;
}

.done-switch {
  width: 10%
}

.todo-name {
  width: 25%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

.todo-description {
  width: 45%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

.edit-delete-button {
  width: 20%;
}

.todo-name-display {
  white-space: nowrap;
  max-width: 107px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
.todo-descript-display {
  white-space: nowrap;
  max-width: 213px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
</style>
