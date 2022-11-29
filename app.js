const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const router = require("./router");
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.get("/front", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/dir", (req, res) => {
  console.log(process.env.DATABASE_URL);
  res.json({ direction: `${__dirname}` });
});

app.use("/api", router);

const PORT = process.env.PORT || 5000; //IMPORTANT: do not change!
app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
