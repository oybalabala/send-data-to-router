// 包含所有基于state的getter计算属性的对象
export default {
  totalCount: function (state) {
    return state.todos.length
  },
  completeCount: function (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  // 判断是否全部选中
  isAllSelect: function (state, getters) {
    return getters.completeCount === getters.totalCount && getters.completeCount > 0
  }
}
