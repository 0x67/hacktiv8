function firstMiddlelast(str) {
    let arr = []

    if (typeof str !== "string") {
        return 'type error'
    }
    else if (str.length <= 2) {
        return 'empty data'
    }
    else if (typeof str === 'string' && str.length > 2) {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
    
        let first = arr[0]
        let middle = Math.floor(arr.length / 2)
        let middleArr = arr[middle]
        let last = arr[arr.length - 1 ]
    
        for (let j = 0; j < arr.length; j++) {
            if (arr.length % 2 === 0) {
                return `First character is ${first}, no middle character, last character is ${last}`  
            }
            else {
                return `First character is ${first}, middle character is ${middleArr}, last character is ${last}`  
            }
            
        }
    }

}
console.log(firstMiddlelast('Acong'))
// 'First character is A, middle character is o, last character is g'
console.log(firstMiddlelast('Yokult'))
// 'First character is Y, no middle character, last character is t'