# This is a stub for a palindromic even celebratory event emitter in Node.js
module.exports = function emitCelebratoryEventIfPalindromicEven(number) {
  const str = String(number);
  if (str === str.split('').reverse().join('') && number % 2 === 0) {
    console.log(`[CELEBRATION] ${number} is a palindromic even number! 🎉`);
  }
};
