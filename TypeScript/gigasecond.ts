const GIGASECOND: number = 1e9;

export class Gigasecond {
    public data: Date;

    constructor(date: Date) {
        this.data = date;
    }

    public date() : Date {
        let newDate = new Date(this.data.getTime());
        newDate.setSeconds(newDate.getSeconds() + GIGASECOND);
        return newDate;
    }
}

let gigasecond = new Gigasecond(new Date(2015, 1, 24, 10, 0, 0));

console.log(gigasecond.data);
console.log(gigasecond.date());