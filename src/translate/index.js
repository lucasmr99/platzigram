const intlReltiveFormat = require('intl-relativeformat');

const intlMessageFormat = require('intl-messageformat');
 



const es = require('./es');
const en = require('./en-US');

let MESSAGES  = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

let locale = 'en-US'

//console.log(MESSAGES)

module.exports = {
    messages: function (text, opts= {}) {
                opts = opts || {}
                console.log('opts' + opts)
                let msg = new intlMessageFormat.default(MESSAGES[locale][text], locale, null);
                console.log( 'msg:' + msg)
                console.log( 'formt' + msg.format(opts))
                return msg.format(opts);
              },
    date: new intlReltiveFormat(locale)
}