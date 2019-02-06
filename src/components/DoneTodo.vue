<template>
  <div class="doneTodo">
    <div v-for="doneTodo in DoneTodos" v-bind:key="doneTodo.id" class="todolist">
      <div>
        <div>
          {{ doneTodo.name }}
        </div>
        <div>
          {{ doneTodo.description }}
        </div>
        <div>
          <button @click="deleteTodo(doneTodo)">Delete</button>
        </div>
        <div>
          <input type="checkbox" id="checkbox" v-model="doneTodo.isComplete" v-on:change="editTodo(doneTodo)" />
          <label for="checkbox">Done</label>
        </div>
      </div>
    </div>
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
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
