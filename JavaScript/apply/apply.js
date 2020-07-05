function fn1() {
  console.log("fn1", this, arguments);
}

Function.prototype.apply = function (context, args) {
  context = context ? Object(context) : window;
  context.fn = this;

  if (!args) {
    return context.fn();
  }

  let r = eval(`context.fn(${args})`);

  delete context.fn;

  return r;
};

fn1.apply("hello", [1, 2, 3]);
