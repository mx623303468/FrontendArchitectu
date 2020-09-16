/**
 * 函数防抖
 * @param {Fucntion} fn 需要防抖的函数
 * @param {Number} wait 间隔时间
 * @param {Boolean} immediate 是否立即执行
 */

const debounce = (fn, wait = 200, immediate = false) => {
  let timer = null; // 保存定时器
  return (...arguments) => {
    // 返回一个函数，形成闭包，保存arguments
    if (timer) clearTimeout(timer); // 如果定时器已存在则清除

    immediate && !timer && fn.apply(this, arguments); // 如果是立即执行，且定时器不存在，则立即执行fn

    // 如果不是立即执行，则定义定时器，并保存到 timer
    timer = setTimeout(() => {
      timer = null; // 重置 timer 为初始值，保证下一轮触发
      !immediate && fn.apply(this, arguments); // 非立即执行，并且 timer 为null
    }, wait);
  };
};

let id = 1;

const log = debounce(
  () => {
    let text = document.createElement("span");
    text.innerHTML = `debounce-${id}`;
    text.style.paddingLeft = 5 + "px";
    text.style.paddingRight = 5 + "px";
    document.body.appendChild(text);
    id++;
  },
  500,
  true
);

btn.addEventListener("click", log);
