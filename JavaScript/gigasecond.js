const GIGASECOND = 1e9;

const gigasecond = (date) => {
    let newDate = new Date(date.getTime());
    newDate.setSeconds(newDate.getSeconds() + GIGASECOND);
    return newDate;
};

let date = new Date(2015, 1, 24, 10, 0, 0);

console.log(date);
console.log(gigasecond(date));