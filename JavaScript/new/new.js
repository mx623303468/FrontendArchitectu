function Currency(type) {
  this.type = type;
}

Currency.prototype.faceValueIsFive = function () {
  console.log("面值 5");
};

// const rmb = new Currency("RMB");
// const dollar = new Currency("dollar");

// console.log(rmb.type);
// rmb.faceValueIsFive();

// console.log(dollar.type);
// dollar.faceValueIsFive();

function mockNew() {
  // 切割构造函数
  let constructor = [].shift.call(arguments);

  // 新建一个空对象
  let obj = {};

  // 让 obj 的 __proto__ 指向 constructor 的原型空间
  obj.__proto__ = constructor.prototype;

  // 改变 this 指向到 obj， 并把剩余的参数传递过去
  let r = constructor.apply(obj, arguments);

  // 如果 r 是引用对象， 就返回 r ,否则返回 obj
  return r instanceof Object ? r : obj;
}

let rmb = mockNew(Currency, "人民币");
console.log(rmb);
console.log(rmb.type);
rmb.faceValueIsFive();
