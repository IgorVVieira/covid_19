module.exports = {
  verifyAge(age) {
    if (age > 100 || age < 0) {
      return false;
    }
    return true;
  },
};