// vue 项目配置
// @author: huangxuan
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import 'assets/main.less'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(ElementUI);
window.imageUrl = "https/12.21.00";

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/**
 * @LoginFn 登录函数
 */

function login () {

}




/**
 * [globalFn description] 通用方法
 * @type {Object}
 */
let globalFn = {
  checkLoginKey:() => {
    let timer = setInterval(() => {
      if(window.localStorage.userInfo) {

      }
    })
  }
};

/**
 * @filter
 * */

