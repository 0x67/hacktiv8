function splitting(str) {
    let heroByTypeArr = []
    let output = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ',' || str[i] === '-') {
            heroByTypeArr.push(output)
            output = ''
            continue
        }
        output += str[i]
        if (i === str.length - 1) heroByTypeArr.push(output)
    }
    return heroByTypeArr
}

function meleeRangedGrouping(str) {
    let heroSplit = splitting(str)
    let heroRangedArr = []
    let heroMeeleArr = []
    let outputArr = []

    if (str === '') {
        return outputArr
    }
    else {
        for (let j = 0; j < heroSplit.length; j++) {
            if(heroSplit[j] === 'Ranged') {
                heroRangedArr.push(heroSplit[j-1])
            }
            else if (heroSplit[j] === 'Melee') {
                heroMeeleArr.push(heroSplit[j-1])
            }
            
        }
        outputArr = [heroRangedArr, heroMeeleArr]
        return outputArr
    }
    
}

// }

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

 console.log(meleeRangedGrouping('')); // []