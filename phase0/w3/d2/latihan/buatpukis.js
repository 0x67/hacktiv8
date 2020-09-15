/*
Olah data dalam array dan object
ada sebuah function "buatPukis" yang menerima 1 parameter ingredient yang berupa nested array.
kamu di minta untuk membuat sebuah code yang mengecek berapa banyak jumlah kue pukis yang dapat di buat dengan bahan yang ada.
untuk membuat sebuah kue pukis di perlukan
    flour : 100
    sugar : 50
    chocolate : 20
sedangkan untuk egg, 1 buah egg dapat di gunakan untuk membuat 4 kue pukis.
contoh :
- input :
    [["flour", 1000], ["egg", 5], ["sugar", 400], ["chocolate", 200]]
- output :
{                                          
  kuePukis: 8,                             
  info: 'Bahan yang tersisa adalah flour : 200, egg : 3, dan chocolate : 40'      
}
Jika ada bahan tidak lengkap, ouput nya `Bahan - bahan tidak lengkap untuk membuat kue pukis`
Jika tidak ada bahan sama sekali, output nya `Tidak ada bahan untuk membuat kue pukis`
ketentuan: 
- dilarang menggunakan built-in function, selain .push();
*/ 


function buatPukis(ingredients){
    if(!ingredients.length){
        return 'Tidak ada bahan untuk membuat kue pukis';
    }
    let result = {}
    const ingredientsNeeded = {
        flour: 100,
        egg: 0.25,
        sugar: 50,
        chocolate: 20
    }
    let objingredients = {}
    for(let i = 0; i < ingredients.length; i++){
        let keys = ingredients[i][0];
        let values = ingredients[i][1];
        objingredients[keys] = values;
    }

    let numberofpukis = Number.MAX_VALUE;
    let temp = 0;
    for(const keys in ingredientsNeeded){
        if(!objingredients[keys]){
            return 'Bahan - bahan tidak lengkap untuk membuat kue pukis';
        }
        temp = Math.floor(objingredients[keys] / ingredientsNeeded[keys]);
        if(temp < numberofpukis){
            numberofpukis = temp;
        }
    }

    for(const keys in objingredients){
        let usedingredients = ingredientsNeeded[keys] * numberofpukis;
        objingredients[keys] = objingredients[keys] - usedingredients;
        if(objingredients[keys] === 0){
            delete objingredients[keys];
        }
    }

    result.kuepukis = numberofpukis;
    result.sisa = objingredients;
    return result;
}

console.log(buatPukis([["flour", 1000], ["egg", 5], ["sugar", 400], ["chocolate", 200]]));
/*
{ 
    kuePukis: 8, 
    sisa: {
        flour: 200, 
        egg: 3, 
        chocolate: 40 
    } 
}
*/ 
// console.log(buatPukis([["flour", 1000], ["sugar", 400], ["chocolate", 200]]));
// // Bahan - bahan tidak lengkap untuk membuat kue pukis

// console.log(buatPukis([]));
// //Tidak ada bahan untuk membuat kue pukis
