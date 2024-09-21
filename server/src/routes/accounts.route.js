import {Router} from "express";

import {healthcheck} from "../controllers/Healthcheck.controllers.js"
import {register} from "../controllers/register.controllers.js"
import { login, logout } from "../controllers/login.controllers.js";
import { deleteUser } from "../controllers/deleteUser.controllers.js";
import { homepage } from "../controllers/homepage.controllers.js";

const router = Router()

router.route("/healthcheck").get(healthcheck)
router.route("/user/register").post(register)
router.route("/user/login").post(login)
router.route("/user/logout").post(logout)
router.route("/user/delete").delete(deleteUser)
router.route("/user/home").get(homepage)

// router.route("/test").get(healthcheck)

export default router;