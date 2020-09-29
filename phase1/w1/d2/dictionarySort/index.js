function dictionarySort(dictionaries) {
    function dictionarySort(dictionaries) {
      let output = []
      
      for (let i = 0; i < dictionaries.length; i++) {
        let temp = ''
        for (let j = 0; j < dictionaries.length; j++) {
          if (dictionaries[j] > dictionaries[i]) {
            temp = dictionaries[j]
            dictionaries[j] = dictionaries[i]
            dictionaries[i] = temp
          }
        }
      }
      return dictionaries.join(',')
    }
    let wordArr1 = ['makan', 'duduk', 'tidur', 'terbang'] 
    // duduk,makan,terbang,tidur
    
    let wordArr2 = ['anggi', 'angga', 'ani', 'adi']
    // adi,angga,anggi,ani
    
    console.log(dictionarySort(wordArr1))
    console.log(dictionarySort(wordArr2))
    module.exports = dictionarySort
  }
  
  module.exports = dictionarySort
  