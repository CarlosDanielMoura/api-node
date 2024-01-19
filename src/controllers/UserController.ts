import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/UserModel";

class UserController {
  constructor() {}

  async createUser(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;

    //validate request
    if (!name) {
      return res.status(422).json({ error: "Name is required" });
    }
    if (!email) {
      return res.status(422).json({ error: "Email is required" });
    }
    if (!password) {
      return res.status(422).json({ error: "Password is required" });
    }
    if (password !== confirmPassword) {
      return res.status(422).json({ error: "Password does not match" });
    }

    //check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "User already exists" });
    }

    //create password hash
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "User already exists" });
    }
  }
}

export default UserController;
