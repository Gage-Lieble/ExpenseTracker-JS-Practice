
function isEven(N){

    if (N === 0){ // Base case - If N is 0
        return true
    }
    else if (N === 1){ // Base case - If N is 1
        return false
    }
    else{ // Recursive call - Takes away 2 until it equals one of the base cases
       return isEven(N - 2) 
    }
};
console.log(isEven(12));