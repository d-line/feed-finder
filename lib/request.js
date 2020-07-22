var got = require('got');
var pkg = require('../package.json');

function request (url, cb) {
    return got(url, {
        timeout: 10000,
        retries: 2,
        headers: {
            'user-agent': pkg.name + '/' + pkg.version + ' (' +  pkg.homepage + ')'
        }
    }, cb);
}

module.exports = request;
