// Symbol
// symbol是javascript的第七种数据类型
// smybol通过调用函数Symbol生成，其类似与字符串属于基础类型，故Symbol函数不能使用new操作符调用
// Symbol函数调用时可以传递一个描述符用来描述当前smybol，如果参数是引用类型则调用toString方法转化为基础类型
console.log(Symbol({}), Symbol(true), Symbol(1), Symbol(['element', {}]));
// symbol 不能当作操作数进行数学运算 否则会报错
// console.log(Symbol('numeber') + 1, `${Symbol('numeber')}`, Symbol('numeber') + false); // 报错 Cannot convert a Symbol value to a number
// symbol 可以进行逻辑运算
console.log(!Symbol(true));
// symbol 可以显示抓换为string boolean
console.log(Symbol('tostring').toString(), String(Symbol('String'))); // 返回symbol描述符
console.log(Boolean(Symbol('boolean'))); // 返回true
// symbol 不可以转化为number
// console.log(Number(Symbol('number'))); // 报错 Cannot convert a Symbol value to a number
// symbol 类型检测时返回的时symbol类型
console.log(typeof Symbol('instanceOf'), Object.prototype.toString.call(Symbol('instanceOf')));
// symbol 使用JSON.stringify操作时, 处于对象中直接被忽略，处于数组中转换为null占位
console.log(JSON.stringify({ sym: Symbol('inObject') }), JSON.stringify([Symbol('inArray')]));
