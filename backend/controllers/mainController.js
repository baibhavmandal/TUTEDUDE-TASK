const getAllUsers = async (req, res) => {
  res.send(`${req.url} running`);
};

const getFriendsList = async (req, res) => {
  res.send(`${req.url} running`);
};

const unfriendUser = async (req, res) => {
  res.send(`${req.url} running : ${req.params.id}`);
};
const sendFriendRequest = async (req, res) => {
  res.send(`${req.url} running : ${req.body}`);
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
