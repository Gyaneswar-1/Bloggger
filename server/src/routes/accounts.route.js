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
import { getUserBlogs } from "../controllers/getUserBlogs.controllers.js";
import { editUserData } from "../controllers/editUser.controllers.js";
import { getusers } from "../controllers/getusers.controllers.js";
import { getBlogByID } from "../controllers/getBlogByID.controllers.js";
import { follow } from "../controllers/FollowHandle.controllers/follow.controllers.js";
import { getFollows } from "../controllers/FollowHandle.controllers/getFollows.controllers.js";
import { getFollowedUser } from "../controllers/FollowHandle.controllers/getFollowedUser.js";
import { unfollow } from "../controllers/FollowHandle.controllers/unfollow.controller.js";
// import { logout } from "../controllers/logout.controllers.js";

const router = Router();

router.route("/test").get(healthcheck);

router.route("/user/register").post(register);

router.route("/user/login").post(login);

router.route("/user/:id").get(authenticationToken, getuserinfo);

router.route("/user").get(authenticationToken, getusers);

router.route("/user/blogs/:id").get(authenticationToken, getUserBlogs);

router.route("/user/edit").put(authenticationToken, editUserData);

router.route("/user/delete").delete(authenticationToken, deleteUser);

router.route("/home").get(authenticationToken, homepage);

router.route("/blog/post").post(authenticationToken, postnewblogs);

router.route("/blog/delete/:uid/:id").delete(authenticationToken, deleteblog);

router.route("/blog/:id").get(authenticationToken, getBlogByID);

router.route("/user/follow/:uid").post( follow);

router.route("/user/getfollows/:uid").get(authenticationToken, getFollows);

router.route("/user/getfolloweduser/:uid").get(getFollowedUser);

router.route("/user/unfollow/:uid").delete(unfollow);

export default router;
