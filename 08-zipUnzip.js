var _ = require('lodash');

var myCarNames = ['Nissan', 'Toyota', 'Honda', 'Lexus'];
var myCarYears = [2001, 2008, 2013, 2019];

// zip two arrays
var myCars = _.zip(myCarNames, myCarYears);

_.forEach(myCars, function(N){
	console.log('Name : ' + N[0] + ' Year: '+ N[1]);
});

// unzip the arrays
var myCarsUnzipped = _.unzip(myCars);
console.log(myCarsUnzipped);