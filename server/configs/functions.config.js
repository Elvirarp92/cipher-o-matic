const min = 'A'.charCodeAt(0)
const max = 'Z'.charCodeAt(0)
const lowerMin = 'a'.charCodeAt(0)
const lowerMax = 'z'.charCodeAt(0)

module.exports = {
  caesar: (plaintext, factor) => {
    let cipher = ''
    for (let i = 0; i < plaintext.length; i++) {
      plaintext.charCodeAt(i) >= 65 && plaintext.charCodeAt(i) <= 90
        ? (cipher += String.fromCharCode(
            ((plaintext.charCodeAt(i) - min + factor) % (max - min + 1)) + min
          ))
        : plaintext.charCodeAt(i) >= 97 && plaintext.charCodeAt(i) <= 122
        ? (cipher += String.fromCharCode(
            ((plaintext.charCodeAt(i) - lowerMin + factor) % (lowerMax - lowerMin + 1)) + lowerMin
          ))
        : (cipher += plaintext[i])
    }
    return cipher
  },
}
