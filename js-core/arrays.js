function boostArray (arr) {

    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i] === 'number')){
            arr[i] = arr[i] + arr[i] * 0.1
        }
    }

    return arr;
}

console.log(boostArray([1,2,3,4,5,6,7])) // Output: [ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7]