const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");

  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello server");
  } else if (req.url == "/about") {
    res.end("This is about us page ");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const objData = JSON.parse(data);
    //   set api response only name and username
    const result = objData.map(({ name, username }) => ({ name, username }));
    const responseData = JSON.stringify(result);

    res.end(responseData);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>page not found!</h1>");
  }
});

server.listen(8000, "localhost", () => {
  console.log("sever running on port 8000");
});
