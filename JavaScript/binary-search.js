// Binary search only works when a list has been sorted.

const find = (arr, value) => {
    if(arr.length === 0) { throw new Error('Value not in array'); }
    
    let l = 0;
    let r = arr.length - 1;

    while(l <= r) {
        let m = Math.floor((l+r) / 2);

        if(value === arr[m]) {
            return m;
        }

        if(value > arr[m]) {
            l = m + 1;
        } 
        else if(value < arr[m]) {
            r = m - 1;
        }    
    }
    
    throw new Error('Value not in array');  
}

console.log(find([1, 3, 4, 6, 8, 9, 11], 11));