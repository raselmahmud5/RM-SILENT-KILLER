module.exports = {
  mention(userID) {
    return `@[${userID}]`;
  },
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
