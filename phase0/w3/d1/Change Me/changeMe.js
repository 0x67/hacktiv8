function changeMe(arr) {
    let obj = {}
    
    if (arr.length < 1) {
        return 'Kosong'
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            
            if (arr[i][3] < 2020) {
                obj.age = 2020 - arr[i][3];
            }
            else {
                obj.age = 'Invalid Birth Year'
            }
            console.log(obj)
        }
       
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""