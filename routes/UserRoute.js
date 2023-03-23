// import express dari depedencies
import express from "express";

// import controller dari controllers/UserController.js
import { getUser } from "../controllers/UserController.js";

// membuat contraint router dengan menggunakan fitur Router() pada express
const router = express.Router();

// membuat end point dari router ('api', 'method')
router.get("/users", getUser);

// export router
export default router;
