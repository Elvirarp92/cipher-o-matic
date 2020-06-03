const min = 'A'.charCodeAt(0)
const max = 'Z'.charCodeAt(0)
const lowerMin = 'a'.charCodeAt(0)
const lowerMax = 'z'.charCodeAt(0)

module.exports = {
  caesar: (text, factor) => {
    let cipher = ''
    for (let i = 0; i < text.length; i++) {
      text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90
        ? (cipher += String.fromCharCode(
            ((text.charCodeAt(i) - min + factor) % (max - min + 1)) + min
          ))
        : text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122
        ? (cipher += String.fromCharCode(
            ((text.charCodeAt(i) - lowerMin + factor) % (lowerMax - lowerMin + 1)) + lowerMin
          ))
        : (cipher += text[i])
    }
    return cipher
  },
}
