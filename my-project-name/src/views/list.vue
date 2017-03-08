<template>
  <div id="3d">
    <div id="main">
      <div v-for="(item,index) in message" @click="resource(index)">
        {{item}}
      </div>
      <div v-html="htmls"></div>
    </div>
    <div id="main1" @click="edit">
      zhe
    </div>
    <form action="" id="commentForm">
      <input type="text" name="emali" v-model="message"  required>
      <button type="submit">提交按钮</button>
    </form>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="100"
        :page-count="50"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
    <div>
      <h3>复杂逻辑关系的Tab切换</h3>
      <router-link to="/list1/tab1" replace>Tab1</router-link>
      <router-link to="/list1/tab2" replace>Tab2</router-link>
      <span>如果不需要历史记录可以加入replace。这种切换不建议加入</span>
    </div>

    <router-view>

    </router-view>
  </div>

</template>


<script type="text/ecmascript-6">

  import $ from 'jquery'
  require('jquery-validation');

  export default{
    mounted () {
      $("#commentForm").validate();
      $.validator.setDefaults({
        submitHandler: function() {
          alert("提交事件!");
        }
      });
    },
    data(){
      return{
        message: [1,2,3,4,5,6,7],
        htmls: "<button>这是测试Html</button>",
        vues:'',
      }
    },
    created () {
    },
    methods: {
      edit(index){
        this.$nextTick(function () {
          this.message.splice(index,1);
        });
      },
      resource(){
        var resource = this.$resource('someItem{/id}');
        // GET someItem/1
        resource.get({id: 1}).then(response => {
          this.message = response.body;
      })
      },
      pageChange(){

      }
    }
  }
</script>

