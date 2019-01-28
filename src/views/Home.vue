<template>
  <div class="home">
    <ul v-if="!isFinished">
      <li>{{ todoList }}</li>
      <li>{{ descrive }}</li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      todoName: "oooo",
      description: "dddd",
      finished: false
    };
  },
  computed: {
    todoList() {
      return this.todoName;
    },
    descrive() {
      return this.description;
    },
    isFinished() {
      return this.finished;
    }
  }
};
</script>
