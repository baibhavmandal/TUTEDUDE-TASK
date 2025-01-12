import User from "../model/user.js";
import logger from "../utils/logger.js";
import generateToken from "../utils/generateToken.js";

const createUser = async (req, res) => {
  try {
    const { username, password, interest } = req.body;

    // Create a new User instance
    const newUser = new User({ username, password, interests: interest });

    // Save the user to the database
    await newUser.save();

    // Log and send a success response
    logger.info("User created successfully");
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    logger.error("Error creating user:", error.message);
    res.status(500).json({ error: "Failed to create user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with email ${email}` });
    }

    if (password != user.password) {
      return res
        .status(401)
        .json({ message: "Invalid credentials. Password does not match." });
    }

    const userData = user.toObject(); // Convert the Mongoose document to a plain JavaScript object
    delete userData.password; // Delete the password field

    const token = generateToken(userData, "user");

    // Log and send a success response
    logger.info("Authentication successfull");

    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    res
      .status(200)
      .json({ success: true, message: "Authentication successfull" });
  } catch (error) {
    logger.error("Error logging in:", error.message);
    res.status(500).json({ error: "Failed to login" });
  }
};

export { createUser, loginUser };
