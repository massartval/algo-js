let a = [0, 1];
/**
 * Returns a boolean compared to a number with ==
 * @param {*} b 
 */
function isTrue (b){
    if (b == true){
        return true;
    } else {
        return false;
    }
}

/**
 * Returns a boolean compared to a number with ===
 * @param {*} b 
 */
function isReallyTrue (b){
    if (b === true){
        return true;
    } else {
        return false;
    }
}


console.log(isTrue(a[0]));
console.log(isReallyTrue(a[0]));
console.log(isTrue(a[1]));
console.log(isReallyTrue(a[1]));

const c = [isTrue(a[1]), isReallyTrue(a[1])];

console.log(c);