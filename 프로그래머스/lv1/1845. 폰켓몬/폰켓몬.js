function solution(nums) {
    let list = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!list.includes(nums[i])) { 
            list.push(nums[i]);
        }
        
        if (list.length === nums.length / 2) { 
            break;
        }
    }
    
    return list.length;
}