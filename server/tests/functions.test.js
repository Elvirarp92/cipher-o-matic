const { caesar } = require('./../configs/functions.config')

test('Ciphers the whole alphabet to ROT13, equalling "NOPQRSTUVWXYZABCDEFGHIJKLM"', () => {
  expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 13)).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM')
})

test('Ciphers "ABCXYZ" to ROT13, equalling "NOPKLM"', () => {
  expect(caesar('ABCXYZ', 13)).toBe('NOPKLM')
})

test('Ciphers "Lorem Ipsum Dolor Sit Amet" to "Yberz Vcfhz Qbybe Fvg Nzrg" on ROT13', () => {
  expect(caesar('Lorem Ipsum Dolor Sit Amet', 13)).toBe('Yberz Vcfhz Qbybe Fvg Nzrg')
})

test('Ciphers "Lorem Ipsum Dolor Sit Amet" to "Twzmu Qxacu Lwtwz Aqb Iumb" on ROT8', () => {
  expect(caesar('Lorem Ipsum Dolor Sit Amet', 8)).toBe('Twzmu Qxacu Lwtwz Aqb Iumb')
})
