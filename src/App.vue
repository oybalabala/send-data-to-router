<template>
<div>
<!--  <ul>-->
<!--    <li v-for="(item,index) in msg" :key="index">-->
<!--      <router-link :to="`/detail/${item.id}`">{{item.name}}</router-link>-->
<!--    </li>-->
<!--    <router-view></router-view>-->
<!--  </ul>-->

<!--  <router-link to="/detail">-->
<!--    <button @click="Name">点我</button>-->
<!--  </router-link>-->
<!--  <router-view :Name="name"></router-view>-->
  <button @click="pushShow(Name1)">push</button>
  <router-view></router-view>
</div>
</template>

<script>
import detail from './router/detail'
export default {
  components: {detail},
  data () {
    return {
      msg: [
        {id: 1, name: '张三'},
        {id: 2, name: '李四'},
        {id: 3, name: '王五'}
      ],
      Name1: 'haha'
    }
  },
  methods: {
    pushShow: function (n) {
      this.$router.push(`/detail/${n}`)
    }

  }

}
</script>

<style>

</style>
