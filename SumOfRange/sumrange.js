


function createRange(start, end){ // Creates range based on end and start value
    let insideLength = end - start
    let rangeArray = []
    for (let i = 0; i < insideLength; i++){
        rangeArray.push(i+1)
    }
    
    return rangeArray.concat(end)
}

function rangeSum(range){ // Adds all the range together
    sum = 0
    for (let i = 0; i < range.length; i++){
       sum += range[i]
    }
    
    return sum
}
console.log(createRange(1,10))
let rangeVal = createRange(1,100)
console.log(rangeSum(rangeVal))