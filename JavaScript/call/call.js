function fn1() {
  console.log("fn1", this, arguments);
}

function fn2() {
  console.log("fn2", this, arguments);
}

/**
 *  ES3写法
 */
Function.prototype.call = function (context) {
  // call 函数会接收一个 上下文 参数
  // 判断是否传递上下文对象，如果没有传递，是 null 或者 undefined 则指向 window
  // 如果 this 传递的是基本数据类型，用 Object() 转换
  // 使用 Object(context) ， 相当于 {}.fn
  context = context ? Object(context) : window;
  context.fn = this;

  let args = []; // 用来保存 arguments 参数

  // i = 1, 因为 arguments 第一项是 this
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }

  // 利用数组变变字符串的 toString 的特性
  // [1, 2] + '345' = "1,2345"
  let r = eval(`context.fn(${args})`);

  // 清除保存的 this
  delete context.fn;

  return r;
};

/**
 * ES6 写法
 */
Function.prototype.call = (context) => {
  let context = context ? Object(context) : window;
  context[fn] = this;

  let args = [...arguments].slice(1);
  let r = context[fn](...args);
  delete context[fn];
  return r;
};

fn1();

fn1("1", "2");

fn1.call(fn2);

fn1.call(fn2, "1", "2");

fn1.call.call(fn2, "1", "2");

fn1.call.call(fn2);
