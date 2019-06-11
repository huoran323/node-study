var fs = require("fs");

function home(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html", "utf8").pipe(response);
}

function review(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/review.html", "utf8").pipe(response);
}

function api_records(response, params) {
  response.writeHead(200, { "Content-Type": "application/json" });
  // 返回的内容
  // var jsonObj = {
  //   name: "hfpp2012"
  // };
  // response.end(JSON.stringify(jsonObj));

  response.end(JSON.stringify(params));
}

module.exports = {
  home: home,
  review: review,
  api_records: api_records
};
