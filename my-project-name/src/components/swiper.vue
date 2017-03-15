<template>
  <div style="width: 100%;overflow: hidden;">
    <div id="sss">
      <div class="content">
        正文内容
      </div>
      <div class="hiddesss">
        <button style="background: green;display: block;width: 60px;height: 50px;">删除</button>
      </div>
    </div>


  </div>
</template>
<script>
  import $ from 'jquery'
  require('assets/base/hammer.min.js')
 export default{
   methods:{},
   mounted(){
     this.$nextTick(function () {
       var hammertime = new Hammer($("#sss")[0]);
       hammertime.on('panleft', function(ev) {
         console.log(ev.deltaX)
         $("#sss").css("margin-left",ev.deltaX+"px")
       });


     })
   }
 }
</script>
<style>
  #sss{
    width: 100%;
    position: relative;
    height: 60px;
    overflow: hidden;
  }
  .content{
    width: 100%;
    height: 98%;
    background-color: red;
    text-align: center;
    float: left;
  }
  .hiddesss {
    width: 20%;
    border: 1px solid red;
    height: 58px;
    float: left;
  }
</style>
