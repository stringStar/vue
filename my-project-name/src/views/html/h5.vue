<template>
    <div>
      <figure>
        <img src="" alt="">
        <figcaption>这是figure标题</figcaption>
        <p>
          figure元素表示网页上的一块儿独立内容，移除后不会对网页其他内容产生影响,
          一个figure只能放一个figcaption
        </p>
      </figure>
      <mark>mark</mark>突出显示或者高亮显示的内容
      <ol start="2" reversed>
        <li>ol现在可以规定开始数</li>
        <li>ol现在可以倒序</li>
      </ol>
      cite元素主要用来引用文章或作品名，显示为斜体，比如<cite>斯巴达克斯</cite>
      <br>
      <small>samll不用到主题内容中，一般表示法律规范，注意事项，版权所有</small>
      <div>
        <h4>pregress使用了</h4>
        <p>完成的百分比
          <progress  max="100" :value="progress">
            <span>{{progress}}</span><span>%</span>
          </progress>
          <input type="button" v-model="progress" @click="go()">
        </p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        progress: 0
      }
    },
    methods:{
      go(){
        console.log(this.progress);
        let interval = setInterval(() =>{
          this.progress < 100 ? this.progress++ : clearInterval(interval)
        },200)
      }
    }
  }
</script>
