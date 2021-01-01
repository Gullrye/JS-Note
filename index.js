function Person() {}
const person1 = new Person()

person1.a = 1
Person.prototype.b = 2
Object.prototype.c = 3

console.log(person1.a)
console.log(person1.b)
console.log(person1.c)

// const Person = new Function()
// 构造函数 Person 是由 Function 创建出来的
console.log(Person.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true（这是规定）
// const obj = new Object()
console.log(typeof Object) // function
console.log(Object.__proto__ === Function.prototype) // true

console.log(Object.__proto__ === Function.__proto__) // true。由前面代码推导可知两者相等
console.log('----------------------')

console.log(person1.hasOwnProperty('a')) // true
console.log(person1.hasOwnProperty('b')) // false
console.log(person1.hasOwnProperty('c')) // false

console.log('a' in person1) // true
console.log('b' in person1) // true
console.log('c' in person1) // true

