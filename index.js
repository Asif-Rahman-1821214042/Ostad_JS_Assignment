function calculateDifference(a,b){
    return a - b;
}

function isOdd(a){
    return (a%2!=0)? true:false;
}

function findMin(a){
    return Math.min(...a);
}

function filterEvenNumbers(a){
   return  a.filter(a => a % 2 === 0)
}

function sortArrayDescending(a){
    return a.sort((a, b) => b - a);
}

function lowercaseFirstLetter(a){
    return a.charAt(0).toLocaleLowerCase()+ a.slice(1);
}

function findAverage(a){
    var sum = 0;
    for(var b=0;b<a.length;b++){
        sum=sum+a[b];
    }
    return sum/a.length;
}

function isLeapYear(a){
    if((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0){
        return true;
    }else{
        return false;
    }
}


console.log(calculateDifference(2,1));
console.log(isOdd(3));
console.log(findMin([20,3,40,10,0]));
console.log(filterEvenNumbers([20,3,40,10,0]));
console.log(sortArrayDescending([20,3,40,10,0]));
console.log(lowercaseFirstLetter("World"));
console.log(findAverage([20,3,40,10,0]));
console.log(isLeapYear(2025));