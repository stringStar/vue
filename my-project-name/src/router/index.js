import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index'
import Myhead from 'components/header'
import List2 from 'views/list2'
import List3 from 'views/list3'
import Lost from 'views/Lost.vue'

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

const Login = resolve => {
  require.ensure(['views/login.vue'], () => {
    resolve(require('views/login.vue'))
  })
};
const Html5 = resolve => {
  require.ensure(['views/html/h5.vue'], () => {
    resolve(require('views/html/h5.vue'))
  })
};

Vue.use(Router);


const routes = [
  {
    path: '/',
    name: 'index',
    title: '首页',
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
    meta: {
      requireLogin: true,
      title: '插件库'
    },
    components: {
      page: Components
    }
  },
  {
    path: '/h5',
    name: 'h5',
    meta: {
      requireLogin: true,
      title: 'h5标签'
    },
    components: {
      page: Html5
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      page: Login
    }
  },
  {
    path: '/404',
    name: '404',
    components: {
      page: Lost
    }
  }
];

routes.map(function (v,i) {
  v.components.head = Myhead;
});
routes.push(
  {
    path:'*',
    redirect:'/'
  }
);
const router = new Router({routes: routes});

router.beforeEach((to,from, next) => {
  if(to.matched.some(record => record.meta.requireLogin)){
    if(window.sessionStorage) {
      window.sessionStorage.userInfo ? next() :  next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      alert('浏览器不支持sessionStorage');
    }
  } else {
    next();
  }
});
// 路由跳转后修改页面title

router.afterEach((route) => {
  if(route.matched.some(record => record.meta.title)){
    document.title = route.meta.title;
  } else {
    document.title = 'vueDemo'
  }
});

export default router;

