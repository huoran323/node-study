var fs = require("fs");

// 同步读取
// 读取文件，在当前的目录下，以utf8格式读取
var readMe = fs.readFileSync("readMe.txt", "utf8");

// 写入文件，文件名为writeMe,文件内容hello world
fs.writeFileSync("writeMe.txt", "hello world");

// 异步读取
var readMe2 = fs.readFile("readMe.txt", "utf8", function(err, data) {
  console.log(data);
});

console.log("finished");
