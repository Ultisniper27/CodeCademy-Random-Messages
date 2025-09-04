const luck = ['Extremely Good', 'Good', 'Okay', 'Bad', 'Extremely Bad'];
const dmg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const timesHit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getLuck(){
    return Math.floor((Math.random() * 10)/2);
}

function getDmg(){
    return Math.floor(Math.random() * 10)
}

function hits(num){
    if(num === 0){
        return 0;
    } else if(num === 4){ 
        return 10;
    }
    else{
        return timesHit[Math.floor(Math.random() * 10)];
    }
}


const luckIndex = getLuck();
const dmgTaken = getDmg();
const numOfHits = hits(luckIndex);
if(luckIndex === 0){
    console.log(`You have ${luck[luckIndex]} Luck! You have dodged all attacks!`);
} else {
    console.log(`You have ${luck[luckIndex]} Luck!`)
    console.log(`You have been hit for ${dmg[dmgTaken]} damage ${numOfHits} times! totaling ${(dmg[dmgTaken] * numOfHits)} damage`);
}