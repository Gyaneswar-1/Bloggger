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
import { postcomment } from "../controllers/postcomment.controller.js";
import { likeblog } from "../controllers/likeHandle.controllers/likeblog.controller.js";
import { getlike } from "../controllers/likeHandle.controllers/getlike.controller.js";
import { dislike } from "../controllers/likeHandle.controllers/dislike.controller.js";
import { getcomment } from "../controllers/comment.controllers/getcomments.controller.js";

const router = Router();

router.route("/test").get(healthcheck);
// user login and register
router.route("/user/register").post(register);
router.route("/user/login").post(login);
// user info
router.route("/user/:id").get(authenticationToken, getuserinfo);
router.route("/user").get(authenticationToken, getusers);
router.route("/user/blogs/:id").get(authenticationToken, getUserBlogs);
router.route("/user/edit").put(authenticationToken, editUserData);
router.route("/user/delete").delete(authenticationToken, deleteUser);
// home page handle
router.route("/home").get(authenticationToken, homepage);
router.route("/blog/post").post(authenticationToken, postnewblogs);
router.route("/blog/delete/:uid/:id").delete(authenticationToken, deleteblog);
router.route("/blog/:id").get(authenticationToken, getBlogByID);
router.route("/blog/searchBlog").get(authenticationToken, searchBlog);
router.route("/blog/edit").put(authenticationToken, editBlog);
// user follow
router.route("/user/follow/:uid").post(authenticationToken, follow);
router.route("/user/unfollow/:uid").delete(authenticationToken, unfollow);
router.route("/user/getfollowers/:uid").get(authenticationToken, getFollowers);
router.route("/user/getfollows/:uid").get(authenticationToken, getFollows);
// blog comment
router.route("/blog/comment/:bid/:uid").post(postcomment);
router.route("/blog/comment/:bid").get(getcomment);
// blog like
router.route("/blog/like/:bid/:uid").post(authenticationToken,likeblog);
router.route("/blog/dislike/:bid/:uid").delete(authenticationToken,dislike);
router.route("/blog/getlike/:bid").get(authenticationToken,getlike);

export default router;
