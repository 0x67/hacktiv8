function changeVocals(str) {
  let vokalLowerCase = 'aiueo'
  let vokalUpperCase = 'AIUEO'
  let gantiLowerCase = 'bjvfp'
  let gantiUpperCase = 'BJVFP'
  //let vokal = vokalArray.findIndex(kata)
  //let isUpperCase = vokalArray.toString()
  let outputVokal = ""

  for (let i = 0; i < str.length; i++) {
      let indexLowerCase = vokalLowerCase.indexOf(str[i])
      let indexUpperCase = vokalUpperCase.indexOf(str[i])
      //console.log(indexLowerCase)
      //console.log(indexUpperCase)

      if (indexLowerCase !== -1) { // when found change it to ganti
          outputVokal += gantiLowerCase[indexLowerCase]
      } else if (indexUpperCase !== -1) {
          outputVokal += gantiUpperCase[indexUpperCase]
      } else {
          outputVokal += str[i]
      }
  }
  return outputVokal
}

function reverseWord (str) {
  var outputReverse = ""

  for (var j = str.length - 1; j >= 0; j--) {
    outputReverse += str[j]
    console.log(outputReverse)
  }

  return outputReverse

}

function setLowerUpperCase(str) {
  let alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'
  let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let outputLowerUpperCase = ''

  for (let k = 0; k < str.length; k++) {
      if (alphabetUpperCase.indexOf(str[k]) !== -1) {
          outputLowerUpperCase += str[k].toLowerCase()
      } else if (alphabetLowerCase.indexOf(str[k]) !== -1) {
          outputLowerUpperCase += str[k].toUpperCase()
      } else {
          outputLowerUpperCase += str[k]
      }
  }
  return outputLowerUpperCase
}

function removeSpaces(str) {
  let outputSpaceRemoved = ''
  let spaces = ' '
  for (let l = 0; l < str.length; l++) {
      if (str[l] === spaces) {
          outputSpaceRemoved += '' // remove only 1 spaces
      } else {
          outputSpaceRemoved += str[l]
      }
  }
  return outputSpaceRemoved
}

function passwordGenerator (name) {
  let vocalChanged = changeVocals(name)
  let reversedWord = reverseWord(vocalChanged)
  let capitalOrNot = setLowerUpperCase(reversedWord)
  let noSpace = removeSpaces(capitalOrNot)
  
  if (noSpace.length >= 5) {
    return noSpace
  }
  else {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

module.exports = {
  changeVocals,
  reverseWord,
  setLowerUpperCase,
  removeSpaces,
  passwordGenerator
}