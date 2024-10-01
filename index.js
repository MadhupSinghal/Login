const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json);

app.post("/signup", (req, res) => {
  const { firstName, lastName, mail, pass, repass } = req.body;
  const userData = { firstName, lastName, mail, pass, repass };
  fs.readFile("users.json", (err, data) => {
    if (err && err.code === "ENOENT") {
      const users = [userData];
      fs.writeFile("user.json", JSON.stringify(users, null, 2), (writeErr) => {
        if (writeErr) {
          return res.status(500).send("Erro saving data");
        }
        return res.status(201).send("signup successfull");
      });
    } else {
      const users = JSON.parse(data);
      users, push(userData);
      fs.writeFile("users.json", JSON.stringify(users, null, 2), (writeErr) => {
        if (writeErr) {
          return res.status(500).send("Error saving Data");
        }
        return res.status(201).send("signup successfull");
      });
    }
  });
});

app.listen(PORT);
