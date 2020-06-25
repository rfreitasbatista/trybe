const assert = require('assert')

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}

// complete a assinatura da função abaixo

const personLikes = (nome) => {
  let {name, age, likes} = nome
  return `${name} is ${age} years old and likes ${likes.join(", ")}.`
}

console.log(personLikes(alex))
assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")
    
module.exports = personLikes
 