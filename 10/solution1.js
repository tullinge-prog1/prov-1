
function divisibleByThree(numbers) {
    return numbers.filter(function (num) {
        return num % 3 === 0
    })    
}

console.log(divisibleByThree([4, 7, 9, 3, 8]))
