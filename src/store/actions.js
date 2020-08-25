// 接受组件通知，触发mutation调用间接更新状态的方法对象（包含多个）
import {ADD_TODO, CLEAR_ALL_COMPLETED, DELETE_TODO, SELECT_TALL_TODOS, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/StorageUtil'
export default {
  addTodo ({commit}, todo) {
    console.log('action中的addTodo方法执行了')
    // 提交commit请求
    commit(ADD_TODO, todo)
  },
  // 删除todo
  deleteItem ({commit}, index) {
    commit(DELETE_TODO, index)
  },
  // 全选或者全不选
  selectAllTodos ({commit}, value) {
    commit(SELECT_TALL_TODOS, value)
  },
  // 删除所有选中的
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },
  // 异步获取todos更新状态
  reqTodos ({commit}) {
    setTimeout(() => {
      // 读取数据
      const readTodos = storageUtil.readTodos()
      // 提交mutationsm
      commit(RECEIVE_TODOS, readTodos)
    }, 1000)
  }

}
