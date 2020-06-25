function vowels(str) {
const vow = ['a', 'e', 'i', 'o', 'u']

return str.toLowerCase().split('').reduce(((total, letra) => (vow.includes(letra) === true) ? total += 1: total), 0)
}
console.log(vowels('ovo'))
module.exports = vowels;