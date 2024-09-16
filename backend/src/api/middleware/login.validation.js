const jwtConfig = require('../auth/jwtConfig');
const {
  validateLoginFields,
  validateRegisterFields,
} = require('../validations/validateLoginFields')


const validateLogin = (req, res, next) => {
  const validate = validateLoginFields(req.body);

  if(validate) return res.status(400).json(validate);

  next();
};

const validateRegister = (req, res, next) => {
  const validate = validateRegisterFields(req.body);

  if(validate) return res.status(400).json(validate);

  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization.length) return res.status(401).json({ message: 'Token not found' });
  
  const payload = jwtConfig.verifyToken(authorization);

  if (payload.isError) return res.status(401).json({ message: 'Expired or invalid token' });

  next();
};

module.exports = {
  validateLogin,
  validateRegister,
  validateToken,
};