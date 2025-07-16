// utils/random.js
function getRandomFloat(min, max, decimals = 2) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }
  
  module.exports = {
    getRandomFloat,
  };
  