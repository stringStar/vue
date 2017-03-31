
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'assets/main.less';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(ElementUI);
window.imageUrl = "https/12.21.00";
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: App }
});

function login() {}

var globalFn = {
  checkLoginKey: function checkLoginKey() {
    var timer = setInterval(function () {
      if (window.localStorage.userInfo) {}
    });
  }
};

//# sourceMappingURL=main-compiled.js.map