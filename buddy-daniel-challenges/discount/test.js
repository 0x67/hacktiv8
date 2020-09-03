var daysBeforeExp = 31;
var basicPrice = 80000;
var discountPrice;

if (daysBeforeExp <= 30){
    basicPrice = basicPrice - (basicPrice * (30 / 100))
    console.log(basicPrice + " kurang dari 30")
}
/*else if (daysBeforeExp <= 60 && daysBeforeExp > 30) {
    if (basicPrice > 50000 && basicPrice < 100000) {
        discountPrice = basicPrice - (basicPrice * 15 / 100)
        basicPrice = basicPrice + 'diskon 15%'
    }
    else if (basicPrice > 100000){
        discountPrice = basicPrice - (basicPrice * 10 / 100)
        basicPrice = basicPrice + 'diskon 10%'
    }
    
}
*/

else if (daysBeforeExp < 60) {
    //basicPrice = basicPrice - (basicPrice * (20 / 100))
    if (basicPrice > 50000) {
        basicPrice = basicPrice - (basicPrice * (15 / 100))
        console.log(basicPrice + "lebih dr 50")
    }
    
}