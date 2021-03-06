import Vue from 'vue';
import Hello from 'src/components/Hello';

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    var Constructor = Vue.extend(Hello);
    var vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App');
  });
});

//# sourceMappingURL=Hello.spec-compiled.js.map