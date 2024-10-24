// Problem 1
let str = "Kar\"" //Escape Sequence Character
console.log(str.length)
console.log(str)

// Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);//ternary operator use

// Problem 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Problem 4
let str2 = "Please give Rs 1999"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Problem 5
let friend = "Gaurav"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable
