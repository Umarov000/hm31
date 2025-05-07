const Joi = require("joi");

const descValidation = (body)=>{
 const schema = Joi.object({
   desc: Joi.string().trim().required(),
 })
 return schema.validate(body, { abortEarly: false });
 
}
   

module.exports = descValidation;
