<template>
  <div class="hello">
    <h1 style="color: red">
      {{msg}}
    </h1>
    <ul>
      <li v-for="(item,index) in  userList" v-bind:key="index">
        {{item.id+' '+item.username}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '校园超市',
      userList: []
    }
  },
  methods:{
    test(){
      this.api.getUserList().then(res=>{
        this.userList = res.data.data.result
        console.log(res)
      })
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
