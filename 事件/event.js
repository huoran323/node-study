var events = require("events");
// util工具类
var util = require("util");

var Person = function(name) {
  this.name = name;
};

// 继承事件对象
util.inherits(Person, events.EventEmitter);

var xiaoming = new Person("xiaoming");
var lili = new Person("lili");
var lucy = new Person("lucy");

var person = [xiaoming, lili, lucy];

// 分别为每个对象绑定事件并传递参数
person.forEach(function(person) {
  person.on("speak", function(message) {
    console.log(person.name + " said: " + message);
  });
});

// 事件调用
xiaoming.emit("speak", "hi");
lucy.emit("speak", "I want a curry");

// 创建事件对象
// var myEmitter = new events.EventEmitter();

// 绑定事件名称'someEvent'，传递事件参数message
// myEmitter.on('someEvent', function(message) {
//     console.log(message);
// })

// 调用事件
// myEmitter.emit('someEvent', 'the event was emitted');

console.log("test");
