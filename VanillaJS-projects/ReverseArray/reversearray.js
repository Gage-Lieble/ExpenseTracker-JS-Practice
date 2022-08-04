


function reverseArray(array){ // Intakes an array, creates a new array with reversed values
    let newArray = []

    for(let i = array.length-1; i > -1; i -= 1){
        newArray.push(array[i])
    }
    return newArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))

