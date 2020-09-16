/**
 * 函数节流
 * @param {Function} fn 需要节流的函数
 * @param {Number} wait 间隔时间
 */
const throttle = (fn, wait = 200) => {
  let timer = null, // 保存定时器
    pervious = 0; // 记录上一次执行的时间

  return (...arguments) => {
    // 返回一个函数形成闭包，保存 arguments
    let now = Date.now(); // 获取当前时间
    let remaining = wait - (now - pervious); // 计算当前时间和上次执行时间的差值与等待时间的差值

    if (remaining < 0) {
      // 如果剩余等待时间小于 0，则可以出发执行
      pervious = now; // 把当前时间保存为上次执行时间
      fn.apply(this, arguments); // 触发执行
    } else if (!timer) {
      // 如果剩余等待时间大于 0， 则设置定时器
      timer = setTimeout(() => {
        timer = null; // 重置 timer 为初始值
        previous = Date.now(); // 把当前时间保存为上次执行时间
        fn.apply(this, arguments); // 触发执行
      }, remaining);
    }
  };
};

const scroll = throttle(() => {
  console.log("scroll", 200);
});

window.addEventListener("scroll", scroll);
