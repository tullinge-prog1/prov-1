function chooseOne(arr) {

    // Gives a random decimal number from 0.0 to length - 1
    const randNum = Math.random() * (arr.length - 1)

    // Math.floor removes the decimal part, so that
    // it is a whole number (integer)
    const randomIndex = Math.floor(randNum)

    return arr[randomIndex]
}

const animals = ['cat', 'dog', 'bird', 'giraffe', 'tiger', 'lion', 'snake', 'lizard', 'fish']

console.log(chooseOne(animals))
console.log(chooseOne(animals))
console.log(chooseOne(animals))
console.log(chooseOne(animals))
