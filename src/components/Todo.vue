<template>
  <div class="todo">
    <div v-for="todo in todoList" v-bind:key="todo.id">
      <div v-if="!todo.isComplete">
        <div>
          {{ todo.name }}
        </div>
        <div>
          {{ todo.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Todo",
  data() {
    return {
      todos: [
        {id: 1, name:"aaaa",description:"ddddd"},
        {id: 2, name:"888",description:"aanv"},
        {id: 3, name:"jioj",description:"ljjlk"},
      ]
    };
  },
  computed: {
    todoList() {
      return this.todos;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
