// 使用localStorage存储数据的模块
// 1.函数 一个功能
// 2.数据 多个功能
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
