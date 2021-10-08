
const result = (arr)=> {
    let result = 0;
    let tmp = [];
    let check = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    tmp = check.filter(x => !arr.includes(x));

    for(let i=0; i<tmp.length; i++){
        result+=tmp[i];
    }
    return result;
}

const numbers = [0, 1, 4, 5, 7, 9];
console.log(result(numbers));