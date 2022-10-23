const a = []
//b1
function findFirstElement(arr) {
    return arr[0];
}
//b2
function findLastElement(arr) {
    return(arr[arr.length - 1]);
}
//b3
function finfSecongToLastElement(arr) {
    return(arr[arr.length - 2]);
}
//b4
function findElementByIndex(arr, index) {
    return(arr[index])
}
//b5
function creatArrayWithOne(num) {
    const arr = [];
    for(let i = 1; i <= num; i++) {
        arr.push(1);
    }
    return arr;
} 
// console.log(creatArrayWithOne(5));
//b6
function zeroToN(num) {
    const arr = [];
    if(num < 0) {
        return undefined;
    }
    else {
        for(let i = 0; i <= num; i++ ) {
            arr.push(i)
        }
        return arr;
    }
}
console.log(zeroToN(1))
//b7
function creatArrayByIndexes(arr, indexStart, indexEnd) {
    const result = [];
    if(arr.length === 0) {
        return []
    }
    else if(indexStart > indexEnd || indexStart < 0 || indexEnd < 0 || indexEnd > arr.length) {
        return undefined
    }
    else {
        for(let i = indexStart; i <= indexEnd; i ++) {
            result.push(arr[i]);
        }
        return result
    }
}
console.log(creatArrayByIndexes([1,3,4,5,6,7],1,4))
//b8
function findMatchString(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return true
            // break
        }
    }
    return false
}
console.log(findMatchString([1,3,4,5,6],1))
//bai 9
function joinProperString(arr) {
    let result = "";
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i] && arr[i] !== 0) {
            arr.splice(i,1);
        }
    }
    for(let i = 0; i < arr.length - 1; i++) {
        result += String(arr[i]) + " "
    }
    result += String(arr[arr.length -1])
    return result
}
console.log(joinProperString(["1",0,undefined]))
//phan nang cao
//ba1
function checkOrderType(arr) {
    if(arr[0] > arr [1]) {
        for(let i = 1; i < arr.length - 1; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] < arr[j]) {
                    return undefined
                }
            }
        }
        return "desc"
    }
    else if(arr[0] < arr[1]) {
        for(let i = 1; i < arr.length - 1; i++) {
            for(let j = i + 1; j < arr.length;j++) {
                if(arr[i] > arr[j]) {
                    return undefined
                }
            }
        }
        return "asc"
    }
}
console.log(checkOrderType([4,3,2,1]))
//bai 2
function checkMatchValues(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i + 1; j < arr.length;j++) {
            if(arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false
}
console.log(checkMatchValues([1,2,3,4]))
//bai 3
function distrobuteGold(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let numMax = 0;
    let n1 = true;
    while(arr.length > 0) {
        if(arr[0] > arr[arr.length]) {
            numMax = arr.shift();
        }
        else {
            numMax = arr.pop();
        }
        if(n1) {
            sum1 += numMax;
            n1 = false;
        }
        else {
            sum2 += numMax;
            n1 = true;
        }
    }
    return [sum1, sum2]
}
console.log(distrobuteGold([100, 200, 500, 150, 350, 600]))