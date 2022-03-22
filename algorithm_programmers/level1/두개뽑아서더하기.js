// 두 개 뽑아서 더하고 오름차순 정렬하여 반환
const solution = (numbers) => {
    let answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(answer)];
    answer.sort((a,b) => a-b);
    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));