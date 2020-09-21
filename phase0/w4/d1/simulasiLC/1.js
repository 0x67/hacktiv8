/**
 * GET MINIMUM NUMBER
 * ==================
 * 
 * Function getMinimum membutuhkan argumen berupa Array of Numbers. Function ini berfungsi untuk mencari
 * angka minimum dari kumpulan angka pada input.
 * 
 * RULES :
 *   - Wajib menuliskan PSEUDOCODE!
 *   - Dilarang menggunakan built-in function selain .push().
 */

function getMinimum(nums) {
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i]
      }
    }
    console.log(min)
  }
  
  getMinimum([100, 50, 9, 98, 110, 5, 3]) // 3
  getMinimum([0, 0, 9, -8, 22, 15, 32]) // -8
  getMinimum([1, 1, 1, -1, 11, 111, -11]) // -11