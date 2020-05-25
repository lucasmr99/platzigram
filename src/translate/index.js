const intlReltiveFormat = require('intl-relativeformat');

const intlMessageFormat = require('intl-messageformat');
 



const es = require('./es');
const en = require('./en-US');

let MESSAGES  = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

let locale = 'es'

module.exports = {
    messages: function (text, opts= {}) {
                  let msg = new intlMessageFormat(MESSAGES[locale][text], locale);
                  return msg.format(opts);
              },
    date: new intlReltiveFormat(locale)
}