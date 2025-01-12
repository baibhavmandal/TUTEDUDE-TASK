import User from "../model/user.js";
import Recommendation from "../model/recommendation.js";
import FriendRequest from "../model/friendRequest.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Retrieves all documents in the User collection
    res.status(200).json(users); // Sends the result as a JSON response
  } catch (error) {
    logger.error(`Error: ${error.message}\n${error.stack}`); // Logs any error that occurs
    res.status(500).json({ message: "Error retrieving users" });
  }
};

const getFriendsList = async (req, res) => {
  try {
    const { friends } = req.user;

    if (!friends || friends.length === 0) {
      return res.status(200).json({ listType: "friendList", friends: [] });
    }

    const friendDetails = await Promise.all(
      friends.map((friendId) => User.findById(friendId).select("-password"))
    );

    res.status(200).json({ listType: "friendList", friends: friendDetails });
  } catch (error) {
    logger.error(`Error: ${error.message}\n${error.stack}`);
    res.status(500).json({ message: "Error retrieving friend list" });
  }
};

const unfriendUser = async (req, res) => {
  try {
    const { friendId } = req.params.id; // The friendId to be removed
    const userId = req.user._id; // The current user's ID

    // Pull the friendId from the user's friends array
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $pull: { friends: friendId } }
    );

    if (updatedUser.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Friend not found or already removed" });
    }

    res.status(200).json({ message: "Friend removed successfully" });
  } catch (error) {
    logger.error(`Error: ${error.message}\n${error.stack}`);
    res.status(500).json({ message: "Error retrieving friend list" });
  }
};

const sendFriendRequest = async (req, res) => {
  try {
    const { userId } = req.body;
    const { _id } = req.user;

    // Use 'new' keyword to create a new instance of the FriendRequest model
    const friendRequest = new FriendRequest({
      senderId: _id,
      reciverId: userId,
    });

    // Save the friend request
    await friendRequest.save();

    res.status(200).json({ message: "Friend request sent successfully" });
  } catch (error) {
    logger.error(`Error: ${error.message}\n${error.stack}`);
    res.status(500).json({ message: "Error sending friend request" });
  }
};

const getFriendRequests = async (req, res) => {
  res.send(`${req.url} running`);
};

const updateFriendRequest = async (req, res) => {
  res.send(`${req.url} running : ${req.params.id}`);
};
const getFriendRecommendations = async (req, res) => {
  res.send(`${req.url} running`);
};

export {
  getAllUsers,
  getFriendsList,
  unfriendUser,
  sendFriendRequest,
  getFriendRequests,
  updateFriendRequest,
  getFriendRecommendations,
};
