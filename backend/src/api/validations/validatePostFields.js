const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(2).required().messages({
    'string.empty': 'O campo título é obrigatório!',
    'string.min': 'O compo título deve ter ao menos 2 caracteres!'
  }),
  content: Joi.string().min(5).required().messages({
    'string.empty': 'O campo conteúdo é obrigatório!',
    'string.min': 'O compo conteúdo deve ter ao menos 5 caracteres!'
  }),
});

const validatePostFields = (post) => {
  const { error } = postSchema.validate(post);

  if(error) return error.details[0].message;
};

module.exports = validatePostFields;