let detik = 65;
let minutes = Math.floor(detik / 60); // get the minutes by return only the largest integer
let seconds = detik - minutes * 60; 

//console.log(minutes)
//console.log(seconds)
if (seconds < 10) {
    console.log(`maka output adalah ${minutes}:0${seconds}`) //idk how to use '0' in 1 digit number so xD 
} else {
    console.log (`maka output adalah ${minutes}:${seconds}`)
}
