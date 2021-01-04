import { observe } from "./observer/index";

export function initState(vm) {
  const opts = vm.$options;

  if (opts.data) {
    // 初始化 data
    initData(vm);
  }
}

export function initData(vm) {
  let data = vm.$options.data;

  // 判断 data 的类型，如果是函数 获取函数的返回值
  // 通过 vm._data 获取劫持后的数据 这样用户就可以拿到 _data
  data = vm._data = typeof data === "function" ? data.call() : data;

  // 将 _data 中的数据全部放到 vm 上
  for (const key in data) {
    proxy(vm, "_data", key);
  }

  // 观测数据 通过 Object.defineProperty
  observe(data);
}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}
