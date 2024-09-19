import {Router} from "express";

// import {healthcheck} from "../controllers/export.js"
import {healthcheck} from "../controllers/Healthcheck.controllers.js"
import {register} from "../controllers/register.controllers.js"
import { login } from "../controllers/login.controllers.js";
import { deleteUser } from "../controllers/deleteUser.controllers.js";

const router = Router()

router.route("/healthcheck").get(healthcheck)
router.route("/user/login").post(login)
router.route("/user/register").post(register)
router.route("/user/delete").delete(deleteUser)

// router.route("/test").get(healthcheck)

export default router;