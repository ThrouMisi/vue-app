<template>
  <div class="doneTodo">
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="done-switch">Done</th>
          <th class="todo-name">Name</th>
          <th class="todo-description">Description</th>
          <th class="edit-delete-button">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in DoneTodos" v-bind:key="todo.id">
          <td>
            <input type="checkbox" id="checkbox" v-model="todo.isComplete" v-on:change="editTodo(todo)" />
          </td>
          <td class="todo-name-display" v-bind:title="todo.description" v-tippy="{ arrow : false, interactive : true, theme : 'light' }">
            {{todo.name}}
          </td>
          <td class="todo-descript-display" v-bind:title="todo.description" v-tippy="{ arrow : false, interactive : true, theme : 'light' }">
            {{todo.description}}
            </td>
          <td>
            <button class="delete-button btn col-md-6 active" @click="deleteTodo(todo)"><img class=" img-responsive center-block" src="../assets/dust-box.png" alt="消去" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState ,mapGetters } from "vuex";

export default {
  name: "DoneTodo",
  computed: {
    ...mapGetters("todos",{
      DoneTodos: "DoneTodos"
    })
  },
  methods: {
    deleteTodo(doneTodo) {
      this.$store.dispatch("todos/deleteTodo",doneTodo)
    },
    editTodo(doneTodo) {
      this.$store.dispatch("todos/editTodo", doneTodo);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.doneTodo {
  position: relative;
  top: 48px;
}
.delete-button {
  padding: 0;
  border: none;
  background: transparent;
}

button img {
  display: block;
  width: 21px;
  position: relative;
  top: -3px;
  left: 10px;
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

[type="text"] {
  &:valid {
    box-shadow: green 0px 0px 3px 1px;
  }
  &:invalid {
    box-shadow: red 0px 0px 3px 1px;
  }
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
