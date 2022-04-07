// N명의 학생들을 키가 작은 순으로 일렬로 세우는데 장난꾸러기 현수가 앞 번호가 받고 싶어 짝꿍과 자리를 바꿈
// 선생님은 이것을 모르고 순서대로 번호 부여
// 일렬로 서있는 키가 주어지면, 현수와 짝꿍이 받은 번호를 반환

const solution = (arr) => {
    let answer=[];
    let sortArr=arr.slice();
    sortArr.sort((a, b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==sortArr[i]) answer.push(i+1);
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));