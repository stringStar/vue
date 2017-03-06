import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Index from 'views/index'
import Myhead from 'components/header'
import List2 from 'views/list2'
import List3 from 'views/list3'

const List1 = resolve => {
  require.ensure(['views/list.vue'], () => {
    resolve(require('views/list.vue'));
  });
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        page: Index,
        head: Myhead
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/List1',
      name: 'List1',
      components: {
        page: List1,
        head: Myhead
      }
    },
    {
      path: '/List2',
      name: 'List2',
      components: {
        page: List2,
        head: Myhead
      }
    },
    {
      path: '/List3',
      name: 'List3',
      components: {
        page: List3,
        head: Myhead
      }
    }
  ]
})
