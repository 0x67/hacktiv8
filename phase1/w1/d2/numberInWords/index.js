function numberberToWords(number) {
    let numArr = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  
    number = Math.floor(number)
    if (number < 12) {
      return numArr[number]
    } else if (number < 20) {
      return numberberToWords(number - 10) + ' belas'
    } else if (number < 100) {
      return numberberToWords(number / 10) + ' puluh' + ((number % 10 === 0) ? '' : ' ' + numberberToWords(number % 10))
    } else if (number < 200) {
      return 'seratus' + ((number % 100 === 0) ? '' : ' ' + numberberToWords(number - 100))
    } else if (number < 1000) {
      return numberberToWords(number / 100) + ' ratus' + ((number % 100 === 0) ? '' : ' ' + numberberToWords(number % 100))
    } else if (number < 2000) {
      return 'seribu' + ((number % 1000 === 0) ? '' : ' ' + numberberToWords(number - 1000))
    } else if (number < 1000000) {
      return numberberToWords(number / 1000) + ' ribu' + ((number % 1000 === 0) ? '' : ' ' + numberberToWords(number % 1000))
    } else if (number < 1000000000) {
      return numberberToWords(number / 1000000) + ' juta' + ((number % 1000000 === 0) ? '' : ' ' + numberberToWords(number % 1000000))
    } else if (number < 1000000000000) {
      return numberberToWords(number / 1000000000) + ' milyar' + ((number % 1000000000 === 0) ? '' : ' ' + numberberToWords(number % 1000000000))
    } else if (number < 1000000000000000) {
      return numberberToWords(number / 1000000000000) + ' triliun' + ((number % 1000000000000 === 0) ? '' : ' ' + numberberToWords(number % 1000000000000))
    }
  }
  
  // Driver code
  console.log(numberberToWords(11));
  console.log(numberberToWords(90));
  console.log(numberberToWords(87));
  console.log(numberberToWords(1000000));
  console.log(numberberToWords(2011845));
  
  //abaikan code dibawah ini
  module.exports = numberberToWords;
  