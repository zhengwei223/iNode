const assert = require('assert');
//assert(value[, message])  断言的基本用法，即判断第一个参数是否为真，为假则抛出异常，如果有第二个参数，异常信息为第二个参数指定的字符串
assert(true);
assert(1);

// assert(false);//抛出异常
// assert(0);//抛出异常

// assert(false,'这是false');//抛出异常：这是false

//assert.deepEqual(actual, expected[, message])
//第一个参数为真实值，第二个参数为期望值，不相同时，会抛出异常。
//deepEqual的含义是深度比较，但是不比较prototype。基本数据类型就是==比较，复合数据类型是比较直接属性或者嵌套对象的属性
const obj1 = {
    a : {
        b : 1    
    }
};
const obj2 = {
    a : {
        b : 2       
    }

};
const obj3 = {
    a : {
        b : 1       
    }
}
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
  // OK, object is equal to itself

assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1  }  } deepEqual { a: { b: 2  }  }values of b are different

 assert.deepEqual(obj1, obj3);
// OK, objects are equal

 assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1  }  } deepEqual {}
// Prototypes 被忽略
