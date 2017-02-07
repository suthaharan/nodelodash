var _ = require('lodash');

var numberArray = [1, 2, 3, 4, 5, 6];

var newArray = [];
// Array slice to take a specific number of elements from the array
console.log('\n\nSlicing array');
newArray = _.slice(numberArray, 0 , 3);

_.forEach(newArray, function(item){
	console.log('Slice array variables ' + item);
});

// Take a specific number of elements from the end of the array 
newArray = _.takeRight(numberArray, 3);

console.log('\n\nTake certain number of items from the end of array');
_.forEach(newArray, function(item){
	console.log('Take array variables ' + item);
});