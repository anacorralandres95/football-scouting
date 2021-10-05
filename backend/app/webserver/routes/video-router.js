"use strict";
const router = require("express").Router();
import multer from "multer";

import addVideo from "../controllers/videos/add-videos-controller";
import checkAccountSession from "../controllers/account/check-account-controller";
import getVideo from "../controllers/videos/get-videos-controller";
import getVideoOnly from "../controllers/videos/get-video-controller";
import getMyVideos from "../controllers/videos/get-myvideos-controller";
import addComment from "../controllers/videos/add-comment-controller";
import addFavorite from "../controllers/videos/add-favorite-controller";
import getComments from "../controllers/videos/get-comment-controller";
import getVideosRelated from "../controllers/videos/get-related-videos-controller";
import getFavorites from "../controllers/videos/get-favorites-controller";
import deteleMyVideos from "../controllers/videos/detele-myvideos-controller";
import deleteFavorite from "../controllers/videos/delete-favorite";
import deleteComment from "../controllers/videos/delete-comment";
import addRating from "../controllers/videos/add-rating-controller";
import getRating from "../controllers/videos/get-rating-controller";

const upload = multer();

router.post("/", checkAccountSession, upload.single("video_url"), addVideo);
router.get("/", checkAccountSession, getVideo);
router.get("/favorites", checkAccountSession, getFavorites);
router.get("/my-videos", checkAccountSession, getMyVideos);
router.get("/:video_id", checkAccountSession, getVideoOnly);
router.delete("/:video_id", checkAccountSession, deteleMyVideos);
router.delete("/:video_id/favorites", checkAccountSession, deleteFavorite);
router.delete("/:video_id/:comment_id", checkAccountSession, deleteComment);
router.get("/:video_id/related", checkAccountSession, getVideosRelated);
router.get("/:video_id/comments", checkAccountSession, getComments);
router.get("/:video_id/rating", checkAccountSession, getRating);
router.post("/:video_id/comment", checkAccountSession, addComment);
router.post("/:video_id/favorite", checkAccountSession, addFavorite);
router.post("/:video_id/rating", checkAccountSession, addRating);

export default router;
