//importing a module in Nodejs
const library = require('./lib/lib')
const callObject = require('./lib/objects')

//using the modules
library()
callObject.action()
console.log('arrays: ', callObject.userIds)