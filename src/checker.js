/**
 * CHECK EMAIL
 * @param {string} email 
 * @returns 
 */
exports.checkEmail = (email) => {
  const emailValidator = require("email-validator"); 

  if (emailValidator.validate(email)) {
    return true;
  }

  return false;
}

/**
 * CHECK NAME
 * @param {string} name 
 * @returns 
 */
exports.checkName = (name) => {
  if (name.length >= process.env.NAME_MIN && 
    name.length <= process.env.NAME_MAX) {

    return true;
  }

  return false;
}

/**
 * CHECK PASSWORD
 * @param {string} pass 
 * @returns 
 */
exports.checkPass = (pass) => {
  const passValidator = require("password-validator");
  const schema        = new passValidator();

  schema
    .is().min(process.env.PASS_MIN)
    .is().max(process.env.PASS_MAX)
    .has().uppercase()
    .has().lowercase()
    .has().digits(process.env.PASS_INT)
    .has().not().spaces();

  if (schema.validate(pass)) {
    return true;
  }

  return false;
}

/**
 * CHECK STRING
 * @param {string} string 
 * @returns 
 */
exports.checkString = (string) => {
  if (typeof string === "string" && string !== "") {

    return true;
  }

  return false;
}

/**
 * CHECK TEXT
 * @param {string} text 
 * @returns 
 */
exports.checkText = (text) => {
  if (text.length >= process.env.TEXT_MIN && 
    text.length <= process.env.TEXT_MAX) {

    return true;
  }

  return false;
}

/**
 * CHECK URL
 * @param {string} url 
 * @returns 
 */
exports.checkUrl = (url) => {
  const validUrl = require("valid-url");

  if (validUrl.isUri(url)) {
    return true;
  }

  return false;
}