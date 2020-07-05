function fn1() {
  console.log("fn1", this, arguments);
}

function fn2() {
  console.log("fn2", this, arguments);
}

/**
 *
 */

Function.prototype.call = function (context) {
  // call 函数会接收一个 上下文 参数
  // 判断是否传递上下文对象，如果没有则使用 window 对象
  // 为了在 context 上保存当前 this，使用 Object(context) ， 相当于 {}.fn
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

fn1();

fn1("1", "2");

fn1.call(fn2);

fn1.call(fn2, "1", "2");

fn1.call.call(fn2, "1", "2");

fn1.call.call(fn2);
