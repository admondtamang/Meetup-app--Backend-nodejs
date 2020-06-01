import { Router } from "express";
import * as GroupController from "./controller";

const routes = new Router();

routes.post("/group/new", GroupController.createGroup);
routes.post("/group/:groupId/meetups/new", GroupController.createGroupMeetup);
routes.get("/group/:groupId/meetups", GroupController.getGroupMeetups);
export default routes;
