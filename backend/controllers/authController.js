import logger from "../utils/logger.js";

const createUser = async (req, res) => {
  res.send(`${req.url} running : ${req.body}`);
};

const loginUser = async (req, res) => {
  res.send(`${req.url} running : ${req.body}`);
};

export { createUser, loginUser };
