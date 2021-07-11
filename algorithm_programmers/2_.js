function solution(deposit) {
    let answer = [];
    for (let i = 0; i < deposit.length; i++) {
        if (deposit[i] > 0) {
            answer.push(deposit[i]);
        } else {
            deposit[i] = Math.abs(deposit[i]);
            if (answer[answer.length - 1] >= deposit[i]) {
                answer[answer.length - 1] -= deposit[i];
                if (answer[answer.length - 1] === 0) {
                    answer.pop();
                }
            } else if (answer[answer.length - 1] < deposit[i]) {
                for(let j=1; j<answer.length; j++) {
                    let tmp = answer[answer.length - 1] -= deposit[i];
                    answer.pop();
                    answer[answer.length - 1] += tmp;
                    if (answer[answer.length - 1] === 0) {
                        answer.pop();
                    }
                    if(tmp===0) break;
                }
            }
        }
    }
    return answer;
}

const deposit = [500, 1000, -300, 200, -400, 100];
console.log(solution(deposit));