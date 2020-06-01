/* eslint-disable no-console */

import mongoose from "mongoose";

import config from "./config";

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.set("debug", true);
  mongoose.connection
    .once("open", () => console.log("Mongodb running"))
    .on("error", (err) => console.error(err));
};

//  Simplified Version
// mongoose
//   .connect(process.env.URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
//   .then(
//     db => {
//       console.log("Successfully connected to MongodB server");
//       mydb = db;
//     },
//     err => console.log(err)
//   );
