import Vue from "vue"
import App from '@/App'

describe("App.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(App); // 创建原始组件的副本
    vm = new cmp({
      data: {
        // 用这个假数据替换数据值
        messages: ["Cat"]
      }
    }).$mount(); // 实例并装入组件
  });

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(["Cat"]);
  });
});