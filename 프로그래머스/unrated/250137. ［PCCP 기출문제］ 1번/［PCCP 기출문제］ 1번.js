function solution(bandage, health, attacks) {
    const lastAttackTime = attacks[attacks.length-1][0]
    const [bandTime, heal, bonusHeal] = bandage;
    let remainTime = lastAttackTime;
    let remainBandTime = bandTime;
    let remainHealth = health;
    let bonusStack = 0;
    let attackTime = [];
    let deal = [];
    
    attacks.forEach((attack)=>{
        attackTime.push(attack[0]);
        deal.push(attack[1]);
    })
    
    for(let i=0; i<lastAttackTime; i++){
        console.log(`${i+1}초 시작. 현재상태: ${i}초 ${remainHealth}`);
        if(attackTime.includes(i+1)){
            bonusStack = 0;
            remainHealth -= deal[0];
            attackTime.shift();
            deal.shift();
            if(remainHealth <= 0)   return -1;
        }else{
            remainHealth += heal;
            bonusStack ++;
            if(bonusStack === bandTime){
                bonusStack = 0;
                remainHealth += bonusHeal;
            }
            if(remainHealth > health){
                remainHealth = health;
            }
        }
    }

    return remainHealth;
}