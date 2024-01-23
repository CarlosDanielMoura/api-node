import express from "express";

import UserController from "./controllers/UserController";

const routes = express.Router();

const userController = new UserController();

routes.post("/users/register", userController.createUser);
routes.get("/users", userController.getAllUsers);

export default routes;
