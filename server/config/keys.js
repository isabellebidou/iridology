//keys.js figure out what set of credentials to return

/*if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');

} else {
    module.exports = require('./dev');
}*/
module.exports = process.env.NODE_ENV === 'production' ? require('./prod') :require('./dev');
