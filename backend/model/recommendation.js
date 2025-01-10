import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  recommendedFriends: [
    {
      friendId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
      }, // Recommended friend's user ID
      mutualFriendsCount: { type: Number, default: 0 }, // Mutual friends with this recommended friend
    },
  ],
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

export default Recommendation;
