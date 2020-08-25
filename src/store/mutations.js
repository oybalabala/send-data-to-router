// 包含多个由actions触发的直接更新状态的方法对象
import {ADD_TODO, DELETE_TODO, SELECT_TALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
export default {
  [ADD_TODO]: function (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO]: function (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_TALL_TODOS]: function (state, {value}) {
    state.todos.forEach(todo => todo.complete = value)
  },
  [CLEAR_ALL_COMPLETED]: function (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS]: function (state, {readTodos}) {
    state.todos = readTodos
  }

}
