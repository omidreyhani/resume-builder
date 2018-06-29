var cowsay = require('cowsay');
module.exports = function (callback, param) {
    var result = cowsay.say({ text: param });
    callback(null, result);
};