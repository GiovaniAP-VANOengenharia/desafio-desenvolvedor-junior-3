const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1000min',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  createToken,
  verifyToken,
};