const jwt = require('jsonwebtoken');

const authTokenGenerator = userId => {
  return jwt.sign({ id: userId },"nodejs", {
    expiresIn: '10d',
  });
};

module.exports = authTokenGenerator;
