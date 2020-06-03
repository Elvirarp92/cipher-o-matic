const { caesar } = require('./../configs/functions.config')

test('Ciphers the whole alphabet to ROT13, equalling "NOPQRSTUVWXYZABCDEFGHIJKLM"', () => {
  expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 13, 'encryption')).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM')
})

test('Ciphers "ABCXYZ" to ROT13, equalling "NOPKLM"', () => {
  expect(caesar('ABCXYZ', 13, 'encryption')).toBe('NOPKLM')
})

test('Ciphers "Lorem Ipsum Dolor Sit Amet" to "Yberz Vcfhz Qbybe Fvg Nzrg" on ROT13', () => {
  expect(caesar('Lorem Ipsum Dolor Sit Amet', 13, 'encryption')).toBe('Yberz Vcfhz Qbybe Fvg Nzrg')
})

test('Ciphers "Lorem Ipsum Dolor Sit Amet" to "Twzmu Qxacu Lwtwz Aqb Iumb" on ROT8', () => {
  expect(caesar('Lorem Ipsum Dolor Sit Amet', 8, 'encryption')).toBe('Twzmu Qxacu Lwtwz Aqb Iumb')
})

test('Decrypts "NOPQRSTUVWXYZABCDEFGHIJKLM" as ROT13, plaintext being the whole alphabet', () => {
  expect(caesar('NOPQRSTUVWXYZABCDEFGHIJKLM', 13, 'decryption')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
})

test('Decrypts "NOPKLM" in ROT13 to "ABCXYZ"', () => {
  expect(caesar('NOPKLM', 13, 'decryption')).toBe('ABCXYZ')
})

test('Decrypts "Yberz Vcfhz Qbybe Fvg Nzrg" on ROT13 to "Lorem Ipsum Dolor Sit Amet"', () => {
  expect(caesar('Yberz Vcfhz Qbybe Fvg Nzrg', 13, 'decryption')).toBe('Lorem Ipsum Dolor Sit Amet')
})

test('Decrypts "Twzmu Qxacu Lwtwz Aqb Iumb" on ROT8 to "Lorem Ipsum Dolor Sit Amet"', () => {
  expect(caesar('Twzmu Qxacu Lwtwz Aqb Iumb', 8, 'decryption')).toBe('Lorem Ipsum Dolor Sit Amet')
})
