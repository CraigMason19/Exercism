type NullableNumber = number | undefined | null;

export function flatten(arr: NullableNumber[]): NullableNumber [] {
    let result: NullableNumber[] = [];
    
    function recurse(arr: NullableNumber[]): void {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                recurse(element);
            } else {
                result.push(element);
            }
        });
    }
    
    recurse(arr);
    return result.filter(e => e !== undefined && e !== null);
}
  
const input: any = [1,[2,3,null,4],[null],5];
console.log(flatten(input));