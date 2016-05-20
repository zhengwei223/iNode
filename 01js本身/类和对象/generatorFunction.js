//生成器函数用于产生一个迭代器，迭代器的next方法被调用时，函数的函数体会被执行直至yield表达式，这个表达式将指定一个值用于next方法的返回值
//生成器函数有特殊的语法，就是在function后加一个*
function * idMaker(){
  var index = 0;
  while(true){
    yield index++;
  }
}

var gen = idMaker();
console.log(gen.next().value);//0
console.log(gen.next().value);//1
console.log(gen.next().value);//2

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
