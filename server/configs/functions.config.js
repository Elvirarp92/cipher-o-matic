const min = 'A'.charCodeAt(0)
const max = 'Z'.charCodeAt(0)
const lowerMin = 'a'.charCodeAt(0)
const lowerMax = 'z'.charCodeAt(0)

function charCaesarEncrypt(char, factor, min) {
  const letterPos = char.charCodeAt(0) % min

  const encryptedLetterPos = letterPos + factor

  const encryptedCharCode = (encryptedLetterPos % 26) + min

  return String.fromCharCode(encryptedCharCode)
}

function charCaesarDecrypt(char, factor, min) {
  const decryptedCharCode = char.charCodeAt(0) - factor

  return decryptedCharCode < min
    ? String.fromCharCode(decryptedCharCode + 26)
    : String.fromCharCode(decryptedCharCode)
}

//There is a ton of repetition here. There should be a way to make this code DRYer.

module.exports = {
  caesar: (text, factor, direction) => {
    let cipher = ''
    if (direction === 'encryption') {
      for (let i = 0; i < text.length; i++) {
        text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90
          ? (cipher += charCaesarEncrypt(text[i], factor, min))
          : text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122
          ? (cipher += charCaesarEncrypt(text[i], factor, lowerMin))
          : (cipher += text[i])
      }
    } else if (direction === 'decryption') {
      for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
          cipher += charCaesarDecrypt(text[i], factor, min)
        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
          cipher += charCaesarDecrypt(text[i], factor, lowerMin)
        } else {
          cipher += text[i]
        }
      }
    }

    return cipher
  },
}
