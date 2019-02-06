const uri = "http://localhost:8080/todos";
import axios from "axios";
const state = {
  allTodos: []
};

const getters = {
  Todos: state => {
    const todo = state.allTodos.filter(todo => {
      return todo.isComplete == false
    });
    return todo
  },
  DoneTodos: state => {
    const todo = state.allTodos.filter(todo => {
      return todo.isComplete == true
    });
    return todo
  }
};

const mutations = {
  setTodos(state,data) {
    data.forEach(data => {
      const todo = {
        id: data._id,
        name: data.name,
        description: data.description,
        isComplete: data.isComplete
      }
      state.allTodos.push(todo)
      return
    })
  },
  editTodo(state, data) {
    state.allTodos.some(function(v, i) {
      if (v.id == data.id) {
        state.allTodos[i].name = data.name
        state.allTodos[i].description = data.description
        state.allTodos[i].isComplete = data.isComplete
        return
    }})
  },
  createTodo(state, data) {
    const todo = {
      id: data.id,
      name: data.name,
      description: data.description,
      isComplete: data.isComplete
    }
    state.allTodos.push(todo)
    return
  },
  deleteTodo(state, data) {
    state.allTodos.some(function(v, i) {
      if (v.id == data.id) {
        state.allTodos.splice(i, 1)
        return
      }
    })
  }
};

const actions = {
  async getAllTodos({ commit }) {
    await axios.get(uri + "/").then(response => {
      commit('setTodos', response.data)
    });
  },
  async editTodo({ commit }, data) {
    const todo = {
      name: data.name,
      description: data.description,
      isComplete: data.isComplete
    }
    await axios.post(uri + "/update/" + data.id, todo).then(response => {
      commit("editTodo", {
        id: response.data._id,
        name: response.data.name,
        description: response.data.description,
        isComplete: response.data.isComplete
      })
    });

  },
  async createTodo({ commit }, todo) {
    console.log(state.allTodos)
    const data = {
      name: todo.name,
      description: todo.description,
      isComplete: false
    }
    await axios.post(uri + "/add", data).then(response => {
      commit("createTodo", {
        id: response.data._id,
        name: response.data.name,
        description: response.data.description,
        isComplete: response.data.isComplete
      })
    });
  },
  async deleteTodo({ commit }, todo) {
    await axios.get(uri + "/delete/" + todo.id).then(response => {
      commit("deleteTodo", {
        id: response.data._id,
        name: response.data.name,
        description: response.data.description,
        isComplete: response.data.isComplete
      })
    });
  },
  async changeComplete({ commit }, data) {
    const todo = {
      name: data.name,
      description: data.description,
      isComplete: true
    }
    console.log(todo,'storeのなかで')
    await axios.post(uri + "/update/" + data.id, todo).then(response => {
      commit("editTodo", {
        id: response.data._id,
        name: response.data.name,
        description: response.data.description,
        isComplete: response.data.isComplete
      })
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
