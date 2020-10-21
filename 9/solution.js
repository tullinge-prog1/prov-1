
function makeBig(str) {
    return str.toUpperCase()
}

function capsify(names) {
    const bigNames = names.map(makeBig) 

    return bigNames
}

const myNames = ['Einar', 'Kim']

console.log(capsify(myNames))
