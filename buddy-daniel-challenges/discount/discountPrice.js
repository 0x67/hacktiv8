var daysBeforeExp = 60;

var basicPrice = 10000;

// Your code here
if (typeof daysBeforeExp !== "number" && typeof basicPrice !== "number") {
    console.log('invalid daysBeforeExp dan basicPrice')
} 
else if (typeof daysBeforeExp !== "number" ) {
    console.log('invalid daysBeforeExp')
}
else if (typeof basicPrice !== "number" ) {
    console.log('invalid basicPrice')
}
else if (typeof daysBeforeExp === "number" || typeof basicPrice === "number") {
    if (daysBeforeExp < 30){
        if (basicPrice <= 50000) {
            basicPrice = basicPrice - (basicPrice * (30 / 100))
            console.log(basicPrice)
        }
        else if (basicPrice >= 100000) {
            basicPrice = basicPrice - (basicPrice * (20 / 100))
            console.log(basicPrice) //kurang dri 60 hr & harga lebih dari 100k
        }
        else if (basicPrice > 50000 && basicPrice < 100000) {
            basicPrice = basicPrice - (basicPrice * (25 / 100))
            console.log(basicPrice) //harga lebih dari 50k & kurang dri 60 hr
        }
        
    }
    else if (daysBeforeExp < 60 && daysBeforeExp >= 30) {
        if (basicPrice <= 50000) {
            basicPrice = basicPrice - (basicPrice * (20 / 100))
            console.log(basicPrice)
        }
        else if (basicPrice > 50000) {
            basicPrice = basicPrice - (basicPrice * (15 / 100))
            console.log(basicPrice) //harga lebih dari 50k & kurang dri 60 hr
        }
        else if (basicPrice > 100000) {
            basicPrice = basicPrice - (basicPrice * (10 / 100))
            console.log(basicPrice) //kurang dri 60 hr & harga lebih dari 100k
        }
    }
    else {
        console.log(basicPrice)
    }
}

// not the best code i know, but it pass the test
// i'll rewrite it later