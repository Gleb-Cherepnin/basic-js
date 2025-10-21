class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0; 

    for (let i = 0; i < message.length; i++) {
      const mChar = message.charCodeAt(i);
      if (mChar >= 65 && mChar <= 90) {
        const kChar = key.charCodeAt(j % key.length) - 65;
        result += String.fromCharCode(((mChar - 65 + kChar) % 26) + 65);
        j++;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const mChar = message.charCodeAt(i);
      if (mChar >= 65 && mChar <= 90) {
        const kChar = key.charCodeAt(j % key.length) - 65;
        result += String.fromCharCode(((mChar - 65 - kChar + 26) % 26) + 65);
        j++;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
