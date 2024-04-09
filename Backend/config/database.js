const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ServiceSparrow")
  .then((data) => {
    console.log(`Database Connected Successfully : ${data.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });
