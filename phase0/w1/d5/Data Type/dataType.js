var kata = true;


if (kata === 0 || kata === '' || NaN) {   
    console.log('Invalid data')         
}
else {
    if (typeof kata === 'string') {
        console.log(`username ${kata}`)
    } 
    else if (typeof kata === 'number'){
        console.log(`age: ${kata}`)
    } else if (typeof kata === 'boolean') {
        if (Boolean(kata)) {
            console.log('ini benar')
        }
        else {
            console.log('ini salah')
        }
    }
}
