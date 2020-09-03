var input = 8;
if (input < 1) {
	console.log('invalid input')
} else {
	for (var i = 1; i <= input; i++) {
		var num = '';
		for (var j = 1; j <= i; j++) {
			num += i;
		}
		console.log(num); // display result
	}
}

/* PROGRAM 2 OUTPUT
1
12
123
1234
12345
*/
/*var input = 5;
if (input < 1) {
	console.log('invalid input')
} else {
	for (var i = 1; i <= input; i++) {
        var num = '';
		for (var j = 1; j <= i; j++) {
			num += j;
		//console.log(i);    << salah
		}
		console.log(num);
	}
}
*/