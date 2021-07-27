// 뒤집은 수가 소수이면 출력

const isPrime = (num) => {
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

const solution = (arr) => {
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){
            let t=x%10; // 일의자리수
            res=res*10+t; //
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));