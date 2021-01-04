export function observe(data) {
  // 只对 对象类型进行观测 非对象类型无法观测
  if (typeof data !== "object" || data == null) {
    return;
  }

  return new Observer(data);
}

class Observer {
  constructor(value) {
    this.walk(value);
  }

  walk(data) {
    // 将对象中的所有key 重新用 defineProperty 定义成响应式的
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);
    });
  }
}

export function defineReactive(data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      observe(newValue);
      value = newValue;
    },
  });
}
