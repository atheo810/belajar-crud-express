// import express dari depedencies
import express from "express";

// import controller dari controllers/UserController.js
import {
  getUser,
  getUserById,
  createUser,
} from "../controllers/UserController.js";

// membuat contraint router dengan menggunakan fitur Router() pada express
const router = express.Router();

// membuat end point dari router ('api', 'method')
router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

// export router
export default router;
