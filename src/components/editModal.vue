<template>
  <div class="editTodo">
    <div id="inline">
      <div>
        <form v-on:submit.prevent="editTodo">
          <input type="text" v-model="todo.name"/>
          <input type="text" v-model="todo.description"/>
          <button type="submit" name="button" @click="closeModal">Submit</button>
        </form>
        <button @click="closeModal">xlose</button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "editModal",
  props: [
    "Todo"
  ],
  data(){
    return {
      todo: {
        id: this.Todo.id,
        name: this.Todo.name,
        description: this.Todo.description,
        isComplete: this.Todo.isComplete
      }
    }
  },
  methods: {
    editTodo() {
      this.$store.dispatch("todos/editTodo", this.todo);
      this.$modal.hide("editTodo")
    },
    closeModal() {
      this.$emit("close")
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
