const mongoose = require('mongoose')
// revisa tu connectionURL aqui :-)
if (process.env.NODE_ENV === "production") {
  var connectionURL = process.env.CONNECTION_URL;
} else {
  const { mongo } = require("../config.js");
  var connectionURL = mongo;
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
