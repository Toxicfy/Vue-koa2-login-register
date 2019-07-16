<template>
  <div>
    <el-button class="info" @click="testHeader" />
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
      }
    }

}
</script>

<style lang="scss" scoped>
</style>
