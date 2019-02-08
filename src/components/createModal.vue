<template>
  <div class="createTodo">
    <div id="inline">
      <div>
        <form  v-on:submit.prevent="createTodo">
          <div class="name-form form-group">
            <label  class="control-label">Name</label>
            <input class="name-input form-control" type="text" v-model="newTodo.name" />
          </div>
          <div class="descript-form form-group">
            <label class="control-label">Description</label>
            <textarea class="descript-input form-control" type="text" v-model="newTodo.description" rows="4" />
          </div>
          <button class="submit btn btn-primary" type="submit" name="button" @click="closeModal" :disabled="!disabled">Submit</button>
        </form>
        <button class="close btn btn-defult" @click="closeModal"><img class=" img-responsive center-block" src="../assets/close-button.png" alt="close"/></button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import v8n from 'v8n';

export default {
  name: "createTodo",
  data(){
    return {
      newTodo: {
        name: "",
        description: "",
      }
    }
  },
  computed: {
    disabled() {
      return this.validate(this.newTodo.name)
    }
  },
  methods: {
    createTodo() {
      if (this.newTodo) {
        this.$store.dispatch("todos/createTodo", this.newTodo);
      }
      this.newTodo = {}
    },
    closeModal() {
      this.$emit("close")
    },
    validate(words) {
      return v8n()
        .not.null()
        .not.empty()
        .not.first(" ")
        .not.first("?")
        .test(words)
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.createTodo {
  top: 20px;
  position: relative;
}

.submit {
  position: relative;
  bottom: 8px;
  left: 252px;
  padding: 5px 10px;
}

.close {
  position: relative;
  bottom: 294px;
  right: 13px;
}

.name-form  {
  position: relative;
  left: 5px;
}
.descript-form {
  position: relative;
  left: 5px;
}

.name-input {
  width: 50%;
}

.descript-input {
  width: 98%;
}

</style>
