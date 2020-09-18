Function.prototype.bind = function (context) {
  let _this = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);

  function Fn() {
  }

  function fBound() {
    let args = Array.prototype.slice.call(arguments);
    return _this.apply(this instanceof fBound ? this : context, [...bindArgs, ...args])
  }

  Fn.prototype = this.prototype;
  fBound.prototype = new Fn();

  return fBound;
}

function Animal(name) {
  this.name = name;
  console.log(this, this.name);
}



let bindFn = 