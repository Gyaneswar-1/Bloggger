import { Router } from "express";

import { healthcheck } from "../controllers/Healthcheck.controllers.js";
import { register } from "../controllers/register.controllers.js";
import { login } from "../controllers/login.controllers.js";
import { deleteUser } from "../controllers/deleteUser.controllers.js";
import { homepage } from "../controllers/homepage.controllers.js";
import { postnewblogs } from "../controllers/postnewblogs.controllers.js";
import { deleteblog } from "../controllers/deleteblog.controllers.js";
import { getuserinfo } from "../controllers/getuserinfo.controllers.js";
import { authenticationToken } from "../middleware/auth.middleware.js";
// import { logout } from "../controllers/logout.controllers.js";

const router = Router();

router.route("/test").get(healthcheck);
router.route("/user/register").post(register);
router.route("/user/login").post(login);
router.route("/user/:id").get(authenticationToken,getuserinfo);
router.route("/user/delete").delete(authenticationToken, deleteUser);
router.route("/home").get(authenticationToken,homepage);//////
router.route("/blog/post").post(authenticationToken,postnewblogs);//////
router.route("/blog/delete/:id/:uid").delete(authenticationToken,deleteblog);
// router.route("/user/logout").get(logout);

export default router;