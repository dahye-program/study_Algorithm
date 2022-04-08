// 카카오 캐시 문제 변형
// 캐시메모리의 LRU(Least Recently Used) 알고리즘을 사용하여 캐시메모리 상태 반환
// LRU => 가장 최근에 사용하지 않은(오랫동안 사용하지 않은) 순으로 캐시 메모리에서 제거
// Cache Miss: 새로운 작업이 들어오면 모든 작업이 뒤로 밀리고 들어온 작업이 캐시의 맨 앞에 위치
// Cache Hit: 해야할 작업이 이미 캐시에 있는 상태이면 해당 작업이 맨 앞으로 오고 한칸씩 뒤로 밀리게 됨

const solution = (size, arr) => {
    let answer = [];
    arr.forEach(x=>{
        let pos = -1;
        for(let i=0; i<size; i++) if(x === answer[i]) pos = i;
        if(pos === -1){
            answer.unshift(x);
            if(answer.length > size) answer.pop();
        }else{
            answer.splice(pos, 1);
            answer.unshift(x);
        }
        answer[0] = x;
    });
    return answer;
}

let size = 5
let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(size, arr));