const validatePostFields = require('../validations/validateLoginFields')

const validatePost = (req, res, next) => {
  const validate = validatePostFields(req.body);

  if(validate) return res.status(400).json(validate);

  next();
};

module.exports = validatePost;