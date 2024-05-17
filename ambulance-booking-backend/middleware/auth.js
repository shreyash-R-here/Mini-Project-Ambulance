// middleware/auth.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'secretKey');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

module.exports = { verifyToken };

