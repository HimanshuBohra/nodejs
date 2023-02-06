// Modules - Encapsulated Code (only share minimum)
// CommonJS - evety file is module  (by default)

const first_module = require('./first_module');
const sayHi = require('./utils');
const generic_data = require('./alternative_flavour');
require('./mind_grenade')
// console.log(first_module);

sayHi('susan');
sayHi(first_module.john);
sayHi(first_module.peter)
console.log(generic_data);