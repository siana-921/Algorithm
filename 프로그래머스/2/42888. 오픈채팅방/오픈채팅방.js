function solution(record) {
    var answer = [];
    let user = {};
    let orderList = [];
    
    record.forEach((item)=>{
        const [tag, uid, name] = item.split(' ');
        orderList.push({tag, uid, name})
        if(tag === 'Enter' || tag === 'Change'){
            user[uid] = name;
        }
    })
    orderList.forEach((order)=>{
        switch(order.tag){
            case 'Enter':
                answer.push(`${user[order.uid]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(`${user[order.uid]}님이 나갔습니다.`);
                break;                
        }
    })

    return answer;
}