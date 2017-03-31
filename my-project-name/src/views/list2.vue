<template>
  <div class="index">
    这是列表2
    <img :src="imgSrc" id="xxx"/>
    <button @click="showImg">查看显示图片</button>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default{
    data(){
      return{
        imgSrc:''
      }
    },
    methods:{
      showImg(){
        document.getElementById("xxx"). onload= function () {
          console.log('图片已经加载完成')
        };
        console.log('图片加载中...');
        this.imgSrc = 'http://qr.liantu.com/api.php?text=http%3A%2F%2Flocalhost%3A3000%2F%23!%2FstockHome%3Fseller_id%3D126';

      }
    },
    created(){

    }
  }
</script>
