var fs = require("fs");

// 异步创建目录
fs.mkdir("stuff", function() {
  fs.readFile("readMe.txt", "utf8", function(err, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function() {
      console.log("copy successfully");
    });
  });
});

// 异步删除目录
// fs.unlink("writeMe.txt", function() {
//     console.log("delete writeMe.txt file");
// })
