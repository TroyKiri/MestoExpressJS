const express = require("express");
const path = require("path");
const usersArr = require("./routes/users");
const usersIdArr = require("./routes/usersid");
const cardsArr = require("./routes/cards");
const invalidRout =require("./routes/invalid");
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", usersArr);
app.use("/", usersIdArr);
app.use("/", cardsArr);
app.use("/", invalidRout);

app.listen(PORT, () => {
  console.log("server started")
});