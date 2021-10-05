"use strict";


const router = require("express").Router();
const multer = require("multer");

const addVideo = require("../controllers/videos/add-videos-controller");
const checkAccountSession = require("../controllers/account/check-account-controller");
const getVideo = require("../controllers/videos/get-videos-controller");
const getVideoOnly = require("../controllers/videos/get-video-controller");
const getMyVideos = require("../controllers/videos/get-myvideos-controller");
const addComment = require("../controllers/videos/add-comment-controller");
const addFavorite = require("../controllers/videos/add-favorite-controller");
const getComments = require("../controllers/videos/get-comment-controller");
const getVideosRelated = require("../controllers/videos/get-related-videos-controller");
const getFavorites = require("../controllers/videos/get-favorites-controller");
const deteleMyVideos = require("../controllers/videos/detele-myvideos-controller");
const deleteFavorite = require("../controllers/videos/delete-favorite");
const deleteComment = require("../controllers/videos/delete-comment");
const addRating = require("../controllers/videos/add-rating-controller");
const getRating = require("../controllers/videos/get-rating-controller");


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



module.exports = router;