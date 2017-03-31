<template>
  <div>
    <input type="text" v-model="password" @keydown="testNumber">
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data () {
      return {
        password:''
      }
    },
    methods: {
      testNumber(){
        setTimeout(()=>{
          console.log(this.password)
        })
      }
    },
    created(){

    }
  }

</script>



<style>
  *{
    padding: 0;
    margin: 0;
  }
  .content{
    width: 400px;
    height: 50px;
    margin: 0 auto;
    margin-top: 100px;

  }
  .title{
    font-family: '微软雅黑';
    font-size: 16px;
  }
  .box{
    width: 190px;
    height: 30px;
    border:1px solid #ccc;
    margin-top: 10px;
    line-height: 30px;
    position: relative;
  }
  .content .box,.forget{
    display: inline-block;
  }
  .content .forget{
    width: 100px;
    color:lightskyblue;
    vertical-align: super;
    font-size: 14px;
  }
  .box input.paw{
    width: 30px;
    height: 20px;
    line-height: 20px;
    margin-left: -9px;
    border:none;
    border-right: 1px dashed #ccc;
    text-align: center;
  }
  .box  input.paw:nth-child(1){
    margin-left: 0;
  }
  .content .box .pawDiv:nth-of-type(6) input.paw{
    border: none;

  }
  .content .box input.paw:focus{outline:0;}
  .content .box .pawDiv{
    line-height: 30px;
    width: 31px;
    height: 31px;
    margin-top: -2px;
    float: left;
  }
  .point{
    font-size: 14px;
    color: #ccc;
    margin: 5px 0;
  }
  .errorPoint{
    color: red;
    display: none;
  }
  .getPasswordBtn{
    width: 100px;
    height: 30px;
    background-color: cornflowerblue;
    font-size: 14px;
    font-family: '微软雅黑';
    color: white;
    border: none;
  }
</style>

