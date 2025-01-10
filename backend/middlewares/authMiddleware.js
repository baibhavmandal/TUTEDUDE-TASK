import logger from "../utils/logger.js";

const authorizeUser = (req, res, next) => {
  logger.info(`Authorization Middleware running sucessfully`);
  next();
};

export default authorizeUser;
