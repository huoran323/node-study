var http = require("http");

var onRequest = function(request, response) {
  console.log("request received");
  // 写入流 写头部，传入一个状态码  后面接入一个对象：写入一个纯文本的内容
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write("hello from out application");
  response.end();
};

// 创建一个服务器
var server = http.createServer(onRequest);

// 监听在3000端口上
server.listen(3000, "127.0.0.1");
console.log("Server started on localhost port 3000");
