function moneyCoins(money) {
    let denomArr = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let output = []
  
    // for loop through denomination array
    for (let i = 0; i < denomArr.length; i++) {
      // check whether if the money is bigger than each iteration of denomArr 
      if (money >= denomArr[i]) {
        // if yes push the denomArr at current index to output
        output.push(denomArr[i])
        // substract the money with value of current denomArr index
        money -= denomArr[i]
      }
    }
  
    // can also be done like this
    
    // assign each index of denomArr to variable denom
    // for (let denom of denomArr) {
    // check whether if the money is bigger than each iteration of denomArr 
    //   if (money >= denom) {
    // if yes push the denomArr at current index to output
    //     output.push(denom)
    //     money -= denom
    //   }
    // }
    return output
  }
  
  
  //driver code
  console.log(moneyCoins(543));
  //output : [ 500, 20, 20, 1, 1, 1 ]
  
  // console.log(moneyCoins(7752));
  // //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]
  
  // console.log(moneyCoins(37454));
  // //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
  
  //abaikan code dibawah ini
  module.exports = moneyCoins
  