module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "array-callback-return": "off"
  }
};
