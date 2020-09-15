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
