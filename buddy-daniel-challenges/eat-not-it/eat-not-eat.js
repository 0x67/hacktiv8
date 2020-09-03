var clock = '800';
var hungry = true;
var activity = 'random';

// Your code here
if (typeof clock !== 'string' || typeof hungry !== 'boolean' || typeof activity !== 'string') {
    console.log('invalid input')
}
else if (activity !== 'high' && activity !== 'low') {
    console.log('invalid activity')
}
/*
else if (typeof activity !== 'string') {
    console.log('invalid input')
    if (activity !== 'high' || activity !== 'low') {
        console.log('invalid activity')
    }
}
*/

else {
    if (clock == '800' || clock == '1200' || clock == '1800') {
        console.log('eat')
    }
    else {
        if (clock !== '800' || clock !== '1200' || clock !== '1800') {
            if (activity == 'high' && hungry) {
                console.log('eat')
            }
            else if (activity == 'high' && hungry) {
                console.log('not eat')
            }
            else {
                console.log('not eat')
            }
        }

    }
}