import server from "./server.js";

const PORT = 8000;

server.listen(PORT, () => {
  console.log(
    `Server up and running. Listening on port: http://localhost:${PORT}`
  );
});
