import * as MeetupController from "./controller";
import { Router } from "express";

const routes = new Router();

routes.post("/meetups", MeetupController.createMeetup);
routes.get("/meetups", MeetupController.getAllMeetups);

export default routes;
