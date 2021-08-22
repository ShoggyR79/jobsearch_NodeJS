const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "cybersoft";
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
