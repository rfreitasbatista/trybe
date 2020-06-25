function vowels(str) {
const vow = ['a', 'e', 'i', 'o', 'u']
return str.toLowerCase().split('').reduce(((total, letra) => (vow.includes(letra) === true) ? total += 1: total), 0)
}
module.exports = vowels;