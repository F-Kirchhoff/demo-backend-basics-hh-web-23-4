import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.url === "/") {
    const content = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World! :D </h1>
</body>
</html>
    `;
    response.statusCode = 200;
    response.end(content);
    return;
  }

  if (request.url === "/about") {
    const content = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>About Me!</h1>
</body>
</html>
    `;
    response.statusCode = 200;
    response.end(content);
    return;
  }

  if (request.url === "/api/user") {
    const userData = {
      name: "Marco",
      previlege: "admin",
      id: "007",
    };

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(userData));
  }
  response.statusCode = 404;
  response.end();
});

export default server;
