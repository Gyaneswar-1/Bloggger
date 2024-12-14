import { Router } from "express";

import { healthcheck } from "../controllers/Healthcheck.controller.js";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
import { deleteUser } from "../controllers/deleteUser.controller.js";
import { homepage } from "../controllers/homepage.controller.js";
import { postnewblogs } from "../controllers/postnewblogs.controller.js";
import { deleteblog } from "../controllers/deleteblog.controller.js";
import { getuserinfo } from "../controllers/getuserinfo.controller.js";
import { authenticationToken } from "../middleware/auth.middleware.js";
import { getUserBlogs } from "../controllers/getUserBlogs.controller.js";
import { editUserData } from "../controllers/editUser.controller.js";
import { getusers } from "../controllers/getusers.controller.js";
import { getBlogByID } from "../controllers/getBlogByID.controller.js";
import { follow } from "../controllers/FollowHandle.controllers/follow.controller.js";
import { getFollows } from "../controllers/FollowHandle.controllers/getFollows.controller.js";
import { getFollowers } from "../controllers/FollowHandle.controllers/getFollowers.controller.js";
import { unfollow } from "../controllers/FollowHandle.controllers/unfollow.controller.js";
import { searchBlog } from "../controllers/searchBlog.controller.js";
import { editBlog } from "../controllers/editBlog.controller.js";
import { comment } from "../controllers/comment.controller.js";
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
router.route("/home").get(authenticationToken,homepage);
router.route("/blog/post").post(authenticationToken, postnewblogs);
router.route("/blog/delete/:uid/:id").delete(authenticationToken, deleteblog);
router.route("/blog/:id").get(authenticationToken, getBlogByID);
router.route("/blog/searchBlog").get(authenticationToken,searchBlog);
router.route("/blog/edit").put(authenticationToken,editBlog);
router.route("/user/follow/:uid").post(authenticationToken, follow);
router.route("/user/getfollows/:uid").get(authenticationToken,getFollows);
router.route("/blog/comment/:bid/:uid").post(comment)
router.route("/user/getfollowers/:uid").get(authenticationToken,getFollowers);
router.route("/user/unfollow/:uid").delete(authenticationToken,unfollow);


export default router;
