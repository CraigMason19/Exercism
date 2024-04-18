class Series {
    constructor(series) {
        if(series.length === 0) {
            throw new Error('series cannot be empty');
        }

        this.series = series;
    }
  
    slices(sliceLength) {
        if(sliceLength < 0) {
            throw new Error('slice length cannot be negative');
        }

        else if(sliceLength === 0) {
            throw new Error('slice length cannot be zero');
        }

        else if(sliceLength > this.series.length) {
            throw new Error('slice length cannot be greater than series length');
        }        
        
        let start = 0;
        let end = sliceLength;
        
        let arr = [];        
         
        while(end <= this.series.length) {       
            let sub = this.series.substring(start, end).split('').map(c => Number(c));
            arr.push(sub);

            start++;
            end++;
        }
        
        return arr;
    }
}  

let slices = new Series('12345678987654321').slices(4);

console.log(slices);