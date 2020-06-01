import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
// import passport from "passport";

export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cors());
  app.options("*", cors());
  //   app.use(passport.initialize());
};
