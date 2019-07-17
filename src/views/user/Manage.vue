<template>
  <div>
    <el-button class="info" @click="testHeader">测试</el-button>
    <el-button class="warning" @click="clearHeader">清除</el-button>
  </div>
</template>

<script>
export default {
    name:'Manage',
    data(){
      return{
        
      }
    },
    methods:{
      testHeader(){
        this.$axios({
         url: 'http://localhost:3000/api/test',
         method: 'get'
        }).then((res) => {
          this.$message(res.data.message)
        })
      },
      clearHeader(){
        localStorage.removeItem('token');
        this.testHeader()
      }
    }

}
</script>

<style lang="scss" scoped>
</style>
