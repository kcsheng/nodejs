const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  res.write("<head><title>Server Test</title></head>");
  res.write("<head><link href='#' type='stylesheet'></head>");
  res.write("<p>Hi there!</p>");
  res.write("<p>Hi there again!</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
