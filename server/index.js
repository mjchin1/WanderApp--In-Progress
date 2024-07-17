const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const client = require("./db/client");

client.connect();

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
