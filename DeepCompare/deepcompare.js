



function deepEqual(obj1, obj2){
    output = ''
    console.log(obj1, obj2)
    if (obj1 === obj2){
        output += true
    }
    else if (obj1 !== obj2){
        output += false
    }
    else if (typeof(obj1) === typeof(obj2)){ // if theyre same type
        let keys1 = String(Object.keys(obj1))
        let keys2 = String(Object.keys(obj2))
        let val1 = String(Object.values(obj1))
        let val2 = String(Object.values(obj2))
    
        if (keys1 === keys2 && val1 === val2){
            output += true
        }
        else {
            output += false
        }
    }
    
    return output
    }
    


console.log(deepEqual(1,10))
console.log