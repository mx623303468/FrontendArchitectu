# JavaScript 的数据类型

## 基本数据类型

- `number`
  - `NaN` 不是一个数字
  - `Infinity` 无穷大
- `string `
- `Boolean`
- `symbol`
  - 唯一值
- `undefined`
- `null`
  - `null` 在二进制中全是 `0` ，而 `typeOf` 判断类型是根据二进制来判断的， `000` 开头的数据都被认为是 `object` ， 所以 `typeOf null` 是 `object` 
- `bigInt`
  - ES6 新的数据类型，用来处理比 `Number.MAX_SAFE_INTEGER(9007199254740991)` 更大的数据类型；
  - 因为 `JavaScript` 的 `number` 是遵从 `IEEE 754` 规范，采用的双精度储存，占用 64bit ，因此能精准表示的最大数就是 `9007199254740991`

## 引用数据类型

- `object`
- `function`