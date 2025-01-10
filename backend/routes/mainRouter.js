import express from "express";

import {
  getAllUsers,
  getFriendsList,
  unfriendUser,
  sendFriendRequest,
  getFriendRequests,
  updateFriendRequest,
  getFriendRecommendations,
} from "../controllers/mainController.js";

const router = express.Router();

// home routes
router.get("/users", getAllUsers); // fetch all users (with search functionality)
router.get("/friends", getFriendsList); // retrieve the friend list for the logged-in user
router.delete("/friends/:id", unfriendUser); // unfriend a user

// friend requests
router.post("/friend-requests", sendFriendRequest); // send a friend request
router.get("/friend-requests", getFriendRequests); // view incoming and outgoing friend request
router.put("/friend-request/:id", updateFriendRequest); // accept or reject firend request

// friend recommendation
router.get("/recommendation", getFriendRecommendations); // fetch recommended friends for the user based on mutual connections or intrest

export default router;
