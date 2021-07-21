# 一、for...in 和 for...of的区别
1. for...in: 遍历数组或对象的**属性**，得：对象的key或数组、字符串的下标；for...of:遍历数组，得到的是数组的值
2. for...in: 会遍历数组所有的可枚举属性，包括原型,例如下面的method和name
```
Array.prototype.method=function(){
　　console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组"
for (var index in myArray) {
  console.log(myArray[index]);
}
```
所以for...in更适合遍历对象，不要遍历数组。
```
Array.prototype.method=function(){
　　console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组";
for (var value of myArray) {
  console.log(value);
}
```
for...of更适合遍历数组。for...in遍历的是数组的索引，for...of遍历的是数组元素值（不包括数组的原型属性method和索引name)。

3. for...in可以遍历到对象的原型方法，若不想遍历对象的原型方法和属性的话，可在循环内部通过判断hasOwnProperty方法，判断是否是该对象的示例属性。
```
for (var key in myObject) {
　　if（myObject.hasOwnProperty(key)){
　　　　console.log(key);
　　}
}
```
也可以通过ES5的Object.keys(myobject)获取对象的实例属性组成的数组，不包括原型方法和属性。
```
Object.prototype.method=function(){
　　console.log(this);
}
var myObject={
　　a:1,
　　b:2,
　　c:3
}
```
4. 扩展
- 使用Object.keys()遍历

返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).
- 使用Object.getOwnPropertyNames(obj)遍历

返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性). 
- 使用Reflect.ownKeys(obj)遍历

返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举. 
 
总结：
- for...of适用于遍历拥有迭代器对象的集合，例如：数/数组对象/字符串/map/set,但是不能遍历对象，因为没有迭代器对象。与forEach()不同的是，它可以正确响应break、continue、return语句。
- for...of不支持普通对象，若想迭代一个对象的属性，可以使用for...in或者内建Object.keys()方法。
```
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```
- 遍历map对象时适合用解构，例如：
```
for (var [key, value] of phoneBookMap) {
   console.log(key + "'s phone number is: " + value);
}
```
为对象添加myobject.toString()后可以将对象转化为字符串，同样的，为任意对象添加yobject.iterator()就能遍历这个对象了,例如：
```
jQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
```
所有拥有Symbol.iterator的对象被称为可迭代的。
> 参考文章：https://www.cnblogs.com/zjx304/p/10687017.html