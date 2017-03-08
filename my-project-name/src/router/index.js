import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index'
import Myhead from 'components/header'
import List2 from 'views/list2'
import List3 from 'views/list3'

const List1 = resolve => {
  require.ensure(['views/list.vue'], () => {
    resolve(require('views/list.vue'));
  });
};

const Components = resolve => {
  require.ensure(['views/plugins.vue'], () => {
    resolve(require('views/plugins.vue'))
  })
};

const Tab1 = resolve => {
  require.ensure(['views/tab.vue'], () => {
    resolve(require('views/tab.vue'))
  })
};
const Tab2 = resolve => {
  require.ensure(['views/tab2.vue'], () => {
    resolve(require('views/tab2.vue'))
  })
};
Vue.use(Router);


const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      page: Index
    }
  },
  {
    path: '/list1',
    name: 'list1',
    components: {
      page: List1
    },
    children:[
      {
        path: 'tab1',
        component: Tab1
      },
      {
        path:'tab2',
        component: Tab2
      }
    ]
  },
  {
    path: '/List2',
    name: 'List2',
    components: {
      page: List2
    }
  },
  {
    path: '/List3',
    name: 'List3',
    components: {
      page: List3
    }
  },
  {
    path: '/components',
    name: 'components',
    components: {
      page: Components
    }
  }
];

routes.map(function (v,i) {
  v.components.head = Myhead;
});

const router = new Router({routes: routes});

export default router;

