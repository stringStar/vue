<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
      <el-submenu index="2">
        <template slot="title">列表服务</template>
        <router-link to="/list1"><el-menu-item index="2-1">列表服务一</el-menu-item></router-link>
        <router-link to="/list2"><el-menu-item index="2-2">列表服务二</el-menu-item></router-link>
        <router-link to="/list3"><el-menu-item index="2-3">列表服务三</el-menu-item></router-link>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/components">插件框</router-link></el-menu-item>
      <div class="users">
        <el-button class="login"   @click="dialogVisible = true">登陆</el-button>
        <el-button type="primary">注册</el-button>
      </div>
    </el-menu>

    <el-dialog  v-model="dialogVisible" size="tiny">

      <div class="dialogTitle">用户登陆</div>

      <el-form :model="loginUser" :rules="rules" :label-position="labelPosition" ref="loginUser" label-width="100px" class="demo-ruleForm loginForm">
        <el-form-item label="账号" prop="users">
          <el-input v-model="loginUser.users" name="users"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginUser.password"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login('loginUser')">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogVisible: false,
        labelPosition: 'right',
        loginUser:{
          users: '',
          password: ''
        },
        rules: {
          users: [
            {
              required: true,
              message: "请输入用户名",
              tigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱',
              tigger: 'blur'
            }

          ],
          password:[
            {
              required: true,
              message:'请输入密码',
              tigger:'blur'
            },
            {
              min: 8,
              max: 20,
              message: '密码长度在 8 到 20 个字符',
              trigger: 'blur'
            }
          ]
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            this.dialogVisible = false;
            window.sessionStorage.setItem('userInfo',"我是黄轩，已经登陆");

//            this.$http.post('/login',this.loginUser).then(response =>{
//              var userInfo = response.body;
//               userInfo.userName = this.loginUser.users;
//              window.localStorage.setItem('userInfo',userInfo);
//            }, response => {
//              alert('登陆失败')
//            })
          }
        });

      }
    }
  }
</script>


