const os = require('os')

//info anout current user
const user = os.userInfo()

console.log(user);

// method returns uptime in seconds

console.log(`the system uptime is ${ os.uptime }`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMEM:os.freemem()
}

console.log(currentOS);