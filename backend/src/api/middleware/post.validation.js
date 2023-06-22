const validatePostFields = require('../validations/validatePostFields')

const validatePost = (req, res, next) => {
  const { title, content } = req.body;
  const validate = validatePostFields({ title, content });

  if(validate) return res.status(400).json(validate);

  next();
};

module.exports = validatePost;