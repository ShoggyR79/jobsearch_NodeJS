const jwt = require("jsonwebtoken");
const { development } = require("../config/config.json");

const secretKey = development.jwtSignature

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send("Bạn chưa đăng nhập");
  }
};

const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((role) => user.role === role) > -1) {
    next();
  } else {
    res.status(403).send("Bạn không có quyền");
  }
};

module.exports = {
  authenticate,
  authorize,
};
