



// Count B's only
// let counter = 0
// let bCount = 0
// let countB = function(str){
//     while(counter < str.length){
//         if (str[counter] === 'B'){
//             bCount += 1
//         }
//         counter += 1
//     }
// }


// countB('BeeBeeBsdgnfsdfknBBBB')
// console.log(bCount)


// Counts all letters
let counter = 0
let letterCount = 0
let countB = function(str, letter){
    while(counter < str.length){
        if (str[counter] === letter){
            letterCount += 1
        }
        counter += 1
    }
}


countB('abcdeeeee', 'e')
console.log(letterCount)