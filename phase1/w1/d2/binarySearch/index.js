'use strict'
/* PSEUDOCODE

    STORE testArrayGenap & testArrayGanjil AS AN ARRAY WITH ANY VALUE

    START FUNCTION ownSort WITH PARAMETER arr
        STORE len AS length of arr

        START FOR LOOP WITH init of 0, START if i LESS THAN len, INCREMENT i by 1
            STORE min WITH VALUE OF i
                START FOR LOOP WITH init of 0, START if i LESS THAN len, INCREMENT i by 1
                    START IF
                        IF arr at index min IS GREATER THAN arr at index j
                            STORE min WITH VALUE of j
                    END IF
                END FOR LOOP
            START IF
                IF VALUE OF min IS NOT EQUAL to i 
                    STORE temp WITH VALUE OF arr at index i
                    STORE arr at index i WITH VALUE OF arr at index min
                    STORE arr at index min WITH VALUE OF temp
            END IF
        END FOR LOOP
        RETURN arr
    END FUNCTION ownSort

    START FUNCTION binary_search WITH PARAMETER search and array
        STORE firstIndex AS A NUMBER WITH VALUE OF 0
        STORE lastIndex AS A NUMBER WITH VALUE OF last index of array
        STORE found AS A BOOLEAN WITH VALUE OF false
        STORE pos AS A NUMBER WITH VALUE OF -1

        START WHILE LOOP IF found is false and firstIndex IS LESS OR EQUAL THAN lastIndex
            Set middle to the index halfway between first and last
            STORE middle AS A NUMBER WITH VALUE OF halfway index between firstIndex and lastIndex
            START IF
                IF array at index middle IS EQUAL TO VALUE OF search
                    STORE found AS BOOLEAN WITH VALUE OF true
                    STORE pos AS A NUMBER WITH VALUE OF middle
                END IF
            START ELSE IF
                ELSE IF array at index middle IS GREATER THAN THE VALUE OF search
                    STORE lastIndex WITH VALUE OF middle - 1
            END IF
            START ELSE
                STORE firstIndex WITH VALUE OF middle + 1
            END ELSE
        END WHILE LOOP
        RETURN position
    END FUNCTION binary_search

    STORE arrayGenapSorted AS AN ARRAY WITH VALUE OF ownSort(testArrayGenap)
    STORE arrayGenapSorted AS AN ARRAY WITH VALUE OF ownSort(testArrayGenap)

*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


function ownSort(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j
          }
      }
      if (min !== i) {
          let temp = arr[i]
          arr[i] = arr[min]
          arr[min] = temp
      }
  }
  return arr
}

function binary_search (search, array) {
  let firstIndex = 0;    
  let lastIndex = array.length - 1;   
  let pos = -1;
  let found = false;
  let middle;
 
    while (found === false && firstIndex <= lastIndex) {
        middle = Math.floor((firstIndex + lastIndex)/2);
        if (array[middle] == search) {
            found = true;
            pos = middle;
        } else if (array[middle] > search) {  
            lastIndex = middle - 1;
        } else { 
            firstIndex = middle + 1;
        }
    }
    return pos;
}

var arrayGenapSorted = ownSort(testArrayGenap)
// [8, 10, 10, 18, 22, 22, 32, 40, 90]

var arrayGanjilSorted = ownSort(testArrayGanjil)
// [3, 21, 31, 53, 53, 55, 77, 85, 89]

// Driver code
console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(10, arrayGenapSorted)) // 1
console.log(binary_search(33, arrayGenapSorted)) // -1

console.log(binary_search(53, arrayGanjilSorted)) // 3 but still get 4
console.log(binary_search(3, arrayGanjilSorted)) // 0
console.log(binary_search(2, arrayGanjilSorted)) // -1

module.exports = binary_search