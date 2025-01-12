import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }], // Explicitly reference "User" collection
  interests: [{ type: String, default: [] }], // String array for interests
});

const User = mongoose.model("User", userSchema);

export default User;
