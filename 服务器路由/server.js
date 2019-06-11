var http = require("http");
var fs = require("fs");
// url的工具库
var url = require("url");
var querystring = require("querystring");

function startServer(route, handle) {
  var onRequest = function(request, response) {
    // 获取链接中不包含？的内容，取问号之前的链接地址
    var pathname = url.parse(request.url).pathname;
    // console.log("Request received " + pathname);
    // 解析地址，true将问号后面的链接作为一个对象返回，false作为一个字符串返回
    // get方法这里才能取到值
    // var params = url.parse(request.url, true).query;
    // route(handle, pathname, response, params);

    var data = [];
    request
      .on("error", function(err) {
        console.error(err);
      })
      .on("data", function(chunk) {
        data.push(chunk);
      })
      .on("end", function() {
        if (request.method === "POST") {
          if (data.length > 1e6) {
            request.connection.destroy();
          }
          data = Buffer.concat(data).toString();
          route(handle, pathname, response, querystring.parse(data));
        } else {
          var params = url.parse(request.url, true).query;
          route(handle, pathname, response, params);
        }
      });
  };

  var server = http.createServer(onRequest);

  server.listen(3000, "127.0.0.1");
  console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;
