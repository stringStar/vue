import Vue from 'vue';
import Router from 'vue-router';
import Index from 'views/index';
import Myhead from 'components/header';
import List2 from 'views/list2';
import List3 from 'views/list3';
import Lost from 'views/Lost.vue';

var List1 = function List1(resolve) {
  require.ensure(['views/list.vue'], function () {
    resolve(require('views/list.vue'));
  });
};

var Components = function Components(resolve) {
  require.ensure(['views/plugins.vue'], function () {
    resolve(require('views/plugins.vue'));
  });
};

var Tab1 = function Tab1(resolve) {
  require.ensure(['views/tab.vue'], function () {
    resolve(require('views/tab.vue'));
  });
};
var Tab2 = function Tab2(resolve) {
  require.ensure(['views/tab2.vue'], function () {
    resolve(require('views/tab2.vue'));
  });
};

var Login = function Login(resolve) {
  require.ensure(['views/login.vue'], function () {
    resolve(require('views/login.vue'));
  });
};
var Html5 = function Html5(resolve) {
  require.ensure(['views/html/h5.vue'], function () {
    resolve(require('views/html/h5.vue'));
  });
};

Vue.use(Router);

var routes = [{
  path: '/',
  name: 'index',
  title: '首页',
  components: {
    page: Index
  }
}, {
  path: '/list1',
  name: 'list1',
  components: {
    page: List1
  },
  children: [{
    path: 'tab1',
    component: Tab1
  }, {
    path: 'tab2',
    component: Tab2
  }]
}, {
  path: '/List2',
  name: 'List2',
  components: {
    page: List2
  }
}, {
  path: '/List3',
  name: 'List3',
  components: {
    page: List3
  }
}, {
  path: '/components',
  name: 'components',
  meta: {
    requireLogin: true,
    title: '插件库'
  },
  components: {
    page: Components
  }
}, {
  path: '/h5',
  name: 'h5',
  meta: {
    requireLogin: true,
    title: 'h5标签'
  },
  components: {
    page: Html5
  }
}, {
  path: '/login',
  name: 'login',
  components: {
    page: Login
  }
}, {
  path: '/404',
  name: '404',
  components: {
    page: Lost
  }
}];

routes.map(function (v, i) {
  v.components.head = Myhead;
});
routes.push({
  path: '*',
  redirect: '/'
});
var router = new Router({ routes: routes });

router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requireLogin;
  })) {
    if (window.sessionStorage) {
      window.sessionStorage.userInfo ? next() : next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      alert('浏览器不支持sessionStorage');
    }
  } else {
    next();
  }
});


router.afterEach(function (route) {
  if (route.matched.some(function (record) {
    return record.meta.title;
  })) {
    document.title = route.meta.title;
  } else {
    document.title = 'vueDemo';
  }
});

export default router;

//# sourceMappingURL=index-compiled.js.map