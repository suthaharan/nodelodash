var _ = require("lodash");

var randomCount = _.random(1, 10);
console.log(randomCount);

var helloWord = "Say Hello!";
var sayHello = _.times(randomCount, () => {
    console.log(helloWord);
});
