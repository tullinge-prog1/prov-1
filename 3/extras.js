const fruits = ['banan', 'äpple', 'vindruvor', 'tomat', 'kiwi']


function replaceElement(arr, i, replacment) {
    arr[i] = replacment
}

replaceElement(fruits, 2, 'CHARLIE')

console.log(fruits)
// [ 10, 'äpple', 'vindruvor', 'tomat', 1000 ]

