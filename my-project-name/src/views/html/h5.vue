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
      <div>form表单的control属性，设置label.control能直接赋值到input</div>
      <div>
        <p>这一块虽然都用不到，还是了解一下</p>
        <input type="checkbox" indeterminate>属性测试
        <input type="image" :src="images" width="20" height="20">提交图片
        <input type="text" name="greeting" list="greetings">
        <datalist id="greetings" style="display: none">
          <option value="0">学习datalist</option>
          <option value="1">这是的list1</option>
          <option value="2">这是的list2</option>
        </datalist>
        <input type="color">
      </div>
      <div>
        <h4>range对象</h4>
        selection对象与range对象的是用
        <input type="button" value="查看选取" @click="rangeText">
        <div>{{rangeTexts}}</div>
      </div>
      <a href="http://www.ruanyifeng.com/blog/2012/08/file_upload.html">文件+++</a>
    </div>

</template>

<script type="text/ecmascript-6">
  import logo from 'assets/logo.png'
  export default {
    data(){
      return {
        progress: 0,
        images:logo,
        rangeTexts:''
      }
    },
    methods:{
      go(){
        let interval = setInterval(() =>{
          this.progress < 100 ? this.progress++ : clearInterval(interval)
        },200)
      },
      rangeText(){
        this.rangeTexts = '';
         var selection = document.getSelection();
         if(selection.rangeCount){
           for(var i = 0, len = selection.rangeCount; i < len; i++){
             this.rangeTexts += selection.getRangeAt(i);
           }
         }
        var arr = [0,1,2,3,4,5,6];
        for(var i = 0, a; a = arr[i++];) {
          console.log(a);
        }
      }
    }
  }
</script>
