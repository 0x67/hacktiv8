function attack(damage) {
    let modifier = 2
    let finalDamage = damage - modifier

    return finalDamage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    let varAttack = attack(damagePerAttack)
    let calculateDamage = numberOfAttacks * varAttack
    return calculateDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90