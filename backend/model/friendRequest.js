import mongoose from "mongoose";

const friendRequestSchema = mongoose.Schema({
  senderId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
  },
});

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);

export default FriendRequest;
